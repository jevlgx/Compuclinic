from .models import *
from rest_framework import serializers


class PosteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poste
        fields = '__all__'
        read_only_fields = ['id',]
        
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class PersonnelNestedSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Personnel
        fields = '__all__'
        depth = 1


class PersonnelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personnel
        fields = '__all__'
        read_only_fields = ['id', 'matricule', 'date_creation', 'type_personnel']
        
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']



class InfirmierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Infirmier
        fields = '__all__'
        # read_only_fields = ['id', 'matricule', 'date_creation']
        read_only_fields = ['id', 'date_creation', 'type_personnel']
        
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']

class InfirmierNestedSerializer(serializers.ModelSerializer):
    poste = PosteSerializer()
    
    class Meta:
        model = Infirmier
        fields = '__all__'

class SecretaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = Secretaire
        fields = '__all__'
        # read_only_fields = ['id', 'matricule', 'date_creation']
        read_only_fields = ['id', 'date_creation', 'type_personnel']
    
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class SecretaireNestedSerializer(serializers.ModelSerializer):
    poste = PosteSerializer()
    
    class Meta:
        model = Secretaire
        fields = '__all__'


class CaissierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Caissier
        fields = '__all__'
        # read_only_fields = ['id', 'matricule', 'date_creation']
        read_only_fields = ['id', 'date_creation', 'type_personnel']
    
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class CaissierNestedSerializer(serializers.ModelSerializer):
    poste = PosteSerializer()
    
    class Meta:
        model = Caissier
        fields = '__all__'


class LaborantinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Laborantin
        fields = '__all__'
        # read_only_fields = ['id', 'matricule', 'date_creation']
        read_only_fields = ['id', 'date_creation', 'type_personnel']
    
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class LaborantinNestedSerializer(serializers.ModelSerializer):
    poste = PosteSerializer()
    
    class Meta:
        model = Laborantin
        fields = '__all__'


class MedecinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Medecin
        fields = '__all__'
        # read_only_fields = ['id', 'matricule', 'date_creation']
        read_only_fields = ['id', 'date_creation', 'type_personnel', 'disponible']
    
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class ProfilSpecialisteSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfilSpecialiste
        fields = '__all__'
        read_only_fields = ['id']
    
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']



class MedecinNestedSerializer(serializers.ModelSerializer):
    poste = PosteSerializer()
    # profilspecialiste = ProfilSpecialisteSerializer()
    
    class Meta:
        model = Medecin
        fields = '__all__'

class PermissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'
        read_only_fields = ['id', 'date_creation']
    
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class RemunerationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Remuneration
        fields = '__all__'
        read_only_fields = ['id', 'date_creation']
    
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class AbsenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Absence
        fields = '__all__'
        read_only_fields = ['id', 'date_creation']
        extra_kwargs = {
            'justificatif': {
                'default': '',
                'required': False,
            }
        }

    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class PointageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = '__all__'
        read_only_fields = ['id', 'date_heure']
        hidden_fields = ['date_heure']
    
    # Adding extra fields (id)
    def get_field_names(self, declared_fields, info):
        expanded_fields = super().get_field_names(declared_fields, info)
        return expanded_fields + ['id']


class PeriodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Periode
        fields = '__all__'


class PeriodeNestedSerializer(serializers.ModelSerializer):
    personnel = PersonnelSerializer()
    
    class Meta:
        model = Periode
        fields = '__all__'
        extra_kwargs = {
            'date': {'required': False, 'allow_null': True},
            'day': {'required': False},
            'en_service':{'default': True}
        }

class EmploiDeTempsSerializer(serializers.Serializer):
    semaine = serializers.DateTimeField(required=False)
    jour = serializers.DateTimeField(required=False)
    heure = serializers.DateTimeField(required=False)
    en_service = serializers.BooleanField(required=False, default=True)
    personnel = serializers.UUIDField(required=False)
