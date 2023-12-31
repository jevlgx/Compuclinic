from .models import *
from rest_framework import serializers
from secretaire.serializers import PatientNestedSerializer
from grh.serializers import MedecinNestedSerializer


class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'
        read_only_fields = ['id', 'date_creation', 'type_personnel']
    
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class ScheduleNestedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'
    
    guest_patient = PatientNestedSerializer()
    guest_medecin = MedecinNestedSerializer()
    