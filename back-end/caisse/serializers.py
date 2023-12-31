from rest_framework import serializers
from .models import *

class FactureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Facture
        fields = '__all__'
        
        
