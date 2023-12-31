from .models import *
from secretaire.serializers import PatientNestedSerializer
from grh.serializers import MedecinNestedSerializer
from utility.serializers import ScheduleNestedSerializer
from rest_framework import serializers


class ConsultationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultation
        fields = '__all__'
        read_only_fields = ['id', 'date_creation', 'type_personnel']
    
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class ConsultationNestedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultation
        fields = '__all__'
    
    patient = PatientNestedSerializer()
    medecin = MedecinNestedSerializer()
    schedule = ScheduleNestedSerializer()
    
    # Adding extra fields (id) 
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']