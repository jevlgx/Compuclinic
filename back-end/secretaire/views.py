from django.shortcuts import render
from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
from plateau_technique.serializers import *
from .models import *
import json
from datetime import datetime
from rest_framework.filters import SearchFilter, OrderingFilter

# Create your views here.

class PatientsViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['temperature', 'weight', 'height', 'pressure', 'nom', 'prenom']
    
    def get_queryset(self):
        queryset = Patient.objects.all()
        statut = self.request.GET.get('statut')
        if statut is not None:
            queryset = Patient.objects.filter(statut=statut)
        return queryset
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return PatientNestedSerializer
        else:
            return PatientSerializer
    
    # def put(self, request, *args, **kwargs):
    #     super().update(request, *args, **kwargs)
    #     instance = self.get_object()
    #     return Response(PatientSerializer(instance.id).data)

@api_view(['GET','POST'])
def patient_list(request):
    #Enregistrer un patient
    if request.method == 'GET':
        data = Patient.objects.all().order_by('nom')

        serializer = PatientSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
    #Modifier un patient
    elif request.method == 'POST':
        #on recupère les données de la requete
        data=request.data
        
        #on cree le matricule
        name = data["nom"][0]
        surname = data["prenom"][0]
        today = datetime.now()
        day = today.day
        month = today.month
        year = today.year
        number = Patient.objects.count() + 1
        matricule = f"PAT{name}{surname}{day:02d}{month:02d}{year}{number:03d}"
 
        #on ajoute un matricule au champ data
        data["matricule"]=matricule
        print(data)
        serializer = PatientSerializer(data=request.data)
       
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_patient(request, pk):
        try:
            patient = Patient.objects.get(pk=pk)
            # print(patient)
            serializer = PatientSerializer(patient, many=False, context={'request': request})
            return Response(serializer.data)
        except:
            return Response({'error': 'Pas de patient avec le pk fourni!'}, status=status.HTTP_417_EXPECTATION_FAILED)

# class PatientViewSet(viewsets.ModelViewSet):
#     queryset = Patient.objects.all()
#     serializer_class = PatientSerializer
#     filter_backends = [SearchFilter, OrderingFilter]
#     search_fields = ['matricule', 'nom', 'prenom', 'CNI', 'type', 'disponible']
    
#     def get(self, request, pk):
#         try:
#             patient = Patient.objects.get(pk=pk)
#             patients = patient.patient_set.all()
#             serializer = PatientSerializer(patients, many=True, context={'request': request})
#             return Response(serializer.data)
#         except:
#             return Response({'error': 'Pas de ùedecin avec le pk fourni!'}, status=status.HTTP_417_EXPECTATION_FAILED)

    
#     def get_serializer_class(self):
#         if self.request.method in ['GET']:
#             return PatientSerializer
#         else:
#             return PatientSerializer
    
#     def get_queryset(self):
#         """
#         Filtrer le résultat juste en fonction d'un paramètre de disponibilité
#         """
#         queryset = Patient.objects.all()
#         # disponible = self.request.query_params.get('disponible')
        
#         # if disponible is None:
#         #     return queryset
        
#         # if disponible.lower() == 'true':
#         #     disponible = True
#         # elif disponible.lower() == 'false':
#         #     disponible = False
#         # else:
#         #     disponible = None
        
#         # if disponible is not None:
#         #     queryset = queryset.filter(disponible=disponible)
        
#         return queryset




@api_view(['PUT'])
def patient_update(request, pk):
    try:
        patient = Patient.objects.get(pk=pk)
    except Patient.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PatientSerializer(patient, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def patient_interner(request,pk):
    try:
        patient = Patient.objects.get(pk=pk)
    except Exception as e:
        return Response({'error': "patient non trouvé"}, status=status.HTTP_400_BAD_REQUEST)
    # On vérifie si il y a un internement en cours
    internements = Internement.objects.filter(patient=patient).filter(en_cours=True)

    if patient.statut=='Externe' and internements.count== 0:
        lits =  Lit.objects.filter(est_libre=True)
        if len(lits) == 0:
            return Response({'status': 'echec', 'message': "il n'y a pas de lit disponible"}, status=status.HTTP_417_EXPECTATION_FAILED)
        else:
            patient.statut='Interne'
            print(patient.statut)
            patientSerializer = PatientSerializer(patient, data=request.data,context={'request': request})
            
            if patientSerializer.is_valid(): 
                patientSerializer.save()
            
            internement = Internement()
            internement.en_cours=True
            internement.lit=lits[0]
            internement.patient=patient
            print(internement)
            lit=lits[0]
            lit.est_libre= False
            litSerializer = LitSerializer(lit, data=request.data,context={'request': request})
            if litSerializer.is_valid():
                litSerializer.save()
            
            internementSerializer = InternementSerializer(internement, data=request.data,context={'request': request})
            if internementSerializer.is_valid():
                internementSerializer.save()
        return Response({'status': 'succès', 'message': 'Patient bien interné!', 'lit': {'id': lit.id}})
    else:
        return Response({'error': "patient déja interné"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def patient_externer(request,pk):
    try:
        patient = Patient.objects.get(pk=pk)
    except Exception as e:
        return Response({'error': "Quelque chose ndem ici..."}, status=status.HTTP_400_BAD_REQUEST)

    # On vérifie si il y a un internement en cours
    internements = Internement.objects.filter(patient=patient).filter(en_cours=True)
    
    if internements.count() == 0:
        return Response({"error": "Pas d'internement en cours pour ce patient! Externement manuel..."})
    
    # Si il y a trop d'internements, arreter le processus
    #if internements.count() > 1:
       # return Response({"error": "Trop d'internement! Corruption..."}, status=status.HTTP_417_EXPECTATION_FAILED)

    if internements.count()== 1:
        internement = internements[0]
        
        lit= internement.lit
        lit.est_libre=True
        litSerializer = LitSerializer(lit, data=request.data,context={'request': request})
        if litSerializer.is_valid():
            litSerializer.save()

        patient.status='Externe'
        patientSerializer = PatientSerializer(patient, data=request.data,context={'request': request})
        if patientSerializer.is_valid(): 
            patientSerializer.save()
        
        
        internement.en_cours=False
        internement.date_sortie= datetime().now()
        return Response({'status': 'succès', 'message': 'Patient bien externé!'})
    else:
        return Response({'error': "patient déja interne"}, status=status.HTTP_400_BAD_REQUEST)
        
        
@api_view(['GET'])
def internementEnCours_list(request):
    #Enregistrer un patient
    data = Internement.objects.filter(en_cours=True).order_by('date_internement')
    serializer = InternementSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def historiq_internement(request):
    #Enregistrer un patient
    data = Internement.objects.filter(en_cours=False).order_by('date_internement')
    serializer = InternementSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)