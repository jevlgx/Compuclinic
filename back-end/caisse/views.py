from django.shortcuts import render
from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
from .models import *
import json
from datetime import datetime

from django.http import FileResponse
import io
from reportlab.pdfgen import canvas 
from reportlab.lib.units import inch 
from reportlab.lib.pagesizes import letter, A4
from reportlab.platypus import Table,SimpleDocTemplate
from reportlab.lib.units import inch
from caisse.temp_invoice import my_temp # import the template


#Generation de pdf
def facture_pdf(request,pk):
    try:
        facture = Facture.objects.get(pk=pk)
    except Facture.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    buf = io.BytesIO()
    can = canvas.Canvas(buf,pagesize = letter)
    #textOb= can.beginText()
    #textOb.setTextOrigin(inch,inch)
    #textOb.setFont("Helvetica",14)
    #textOb.textOut("COMPUCLINIC") 
    #can.drawText(textOb)
    #can.showPage()
    #can.save()
    #buf.seek(0)

    
   
    #c=my_temp(c) # run the template

    #c.setFillColorRGB(0,0,1) # font colour
    #c.setFont("Helvetica", 20)
    #row_gap=0.6 # gap between each row
    #line_y=7.9 # location of fist Y position 
    data = [
        ['Dedicated Hosting', 'VPS Hosting', 'Sharing Hosting', 'Reseller Hosting' ],
        ['€200/Month', '€100/Month', '€20/Month', '€50/Month'],
        ['Free Domain', 'Free Domain', 'Free Domain', 'Free Domain'],
        ['2GB DDR2', '20GB Disc Space', 'Unlimited Email', 'Unlimited Email']
     ]
    
    fileName = 'pdfTable.pdf'
    pdf = SimpleDocTemplate(
        fileName,
        pagesize=letter
    )


    table=Table(data)

    elems=[]
    elems.append(table)
    #c.drawString(0.1*inch,line_y*inch,str(facture.patient.nom)) # p Name
    #c.drawRightString(4.5*inch,line_y*inch,str(facture.prestation)) # p Price
    #c.drawRightString(5.5*inch,line_y*inch,str(facture.montant_TTC)) # p Qunt 

    #line_y=line_y-row_gap
    #c.setFont("Times-Bold", 22)
    #c.setFillColorRGB(1,0,0) # font colour
    #c.showPage()
    
    c.save()
    buf.seek(0)

    pdf.build(elems)
    
    return FileResponse(buf,as_attachment=True,filename="facture.pdf")

# Create your views here.
@api_view(['GET','POST'])
def facture_list(request):
    
    if request.method == 'GET':
        data = Facture.objects.all().order_by('date_creation')

        serializer = FactureSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
   
    elif request.method == 'POST':
        #SI NOUS EN AVONS BESOIN , nous mettrons l'ID du patient en paramemtre
        
        numero=Facture.objects.count()+1
        #on recupère les données de la requete
        data=request.data
        
        #on cree le matricule
        today = datetime.now()
        day = today.day
        month = today.month
        year = today.year
        number = Facture.objects.count() + 1
        matricule = f"QTC{day:02d}{month:02d}{year:02d}{number:03d}"
        data["numero"]=numero
        data["matricule"]=matricule

        print(data)
        serializer = FactureSerializer(data=request.data)
       
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE','GET'])
def facture_supprimer(request, pk):
    try:
        facture = Facture.objects.get(pk=pk)
    except Facture.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    facture.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['PUT'])
def facture_payer(request, pk):
    try:
        facture = Facture.objects.get(pk=pk)
    except Facture.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
  
    facture.est_paye=True  
    serializer = FactureSerializer(facture, data=request.data,context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

