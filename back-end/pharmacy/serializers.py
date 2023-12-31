from .models import *
from rest_framework import serializers


class MedicamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medicament
        fields = '__all__'
        read_only_fields = ['id', 'date_creation', 'type_personnel']
    
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class MedicamentNestedSerializer(serializers.ModelSerializer):
    Medicament = MedicamentSerializer()
    
    class Meta:
        model = Medicament
        fields = '__all__'