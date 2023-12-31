from rest_framework import serializers
from .models import *

class ExamenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Examen
        fields = '__all__'

class LigneExamenSerializer(serializers.ModelSerializer):
    class Meta:
        model = LigneExamen
        fields = '__all__'
        
        
