from django.shortcuts import render
from .serializers import *
from .models import *
from datetime import datetime
from rest_framework import viewsets, mixins, views, status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter

@api_view(['POST'])
def post_consultation(request, format=None):
    """
    This function is needed because consultation entry needs patient's
    symptomes and antecedents, which aren't directly set from the frontend.
    """

    # Create new Consultation
    # print(request.data)
    
    consultation = Consultation.objects.create(
        medecin = Medecin.objects.get(pk=request.data.get("medecin")), #Medecin(medecin),
        patient = Patient.objects.get(pk=request.data.get("patient")), #Patient(patient),
    )
    schedule = Schedule.objects.create(
        guest_medecin = Medecin.objects.get(pk=request.data.get("medecin")), #medecin,
        guest_patient = Patient.objects.get(pk=request.data.get("patient")), #patient,
        statut = 'Allocated',
        # datetime.date
        # d = datetime(2015, 10, 09, 23, 55, 59, 342380)
        date_debut = datetime.now().isoformat(),
        duree = 60,
        date_fin = datetime(
            year=datetime.now().year,
            month=datetime.now().month,
            day=datetime.now().day,
            hour=datetime.now().hour + 1,
            minute=datetime.now().minute,
            second=datetime.now().second,
        ),
    )
    consultation.schedule = schedule
    consultation.save()
    #
    #serializer = ConsultationSerializer(consultation, many=False, context={'request':request})
    serializer = ConsultationNestedSerializer(consultation, many=False, context={'request':request})
    return Response(serializer.data, status=status.HTTP_201_CREATED)
     

class ConsultationViewSet(viewsets.ModelViewSet):
    queryset = Consultation.objects.all()
    serializer_class = ConsultationSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['matricule', 'nom', 'prenom', 'CNI']
    
    def get_queryset(self):
        queryset = Consultation.objects.all()
        medecin = self.request.GET.get('medecin_id')
        if medecin is not None:
            queryset = Consultation.objects.filter(medecin=medecin)
        id = self.request.GET.get('consultation_id')
        if id is not None:
            queryset = Consultation.objects.filter(id=id)
        return queryset

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return ConsultationNestedSerializer
        else:
            return ConsultationSerializer
