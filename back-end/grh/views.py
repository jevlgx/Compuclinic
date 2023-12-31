from django.shortcuts import render
from .serializers import *
from .models import *
from .filters import *
from rest_framework import viewsets, mixins, views, status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter
# Create your views here.

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
def post_datas_sandbox(request, format=None):
    print(request.data)
    
    return Response({'msg': 'Data posted successfully'}, status=status.HTTP_200_OK)


# class PersonnelViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
class PersonnelViewSet(viewsets.ModelViewSet):
    queryset = Personnel.objects.all().order_by('nom', 'prenom')
    serializer_class = PersonnelSerializer
    fitler_backends =  [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['type_personnel', 'matricule', 'etat_civil', 'nationalite', 'email', 'telephone']
    search_fields = ['nom', 'prenom']
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return PersonnelNestedSerializer
        else:
            return PersonnelSerializer


class PosteViewSet(viewsets.ModelViewSet):
    queryset = Poste.objects.all()
    serializer_class = PosteSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['service']


class InfirmierViewSet(viewsets.ModelViewSet):
    queryset = Infirmier.objects.all()
    serializer_class = InfirmierSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['matricule']
    search_fields = ['matricule', 'nom', 'prenom', 'CNI']
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return InfirmierNestedSerializer
        else:
            return InfirmierSerializer


class SecretaireViewSet(viewsets.ModelViewSet):
    queryset = Secretaire.objects.all()
    serializer_class = SecretaireSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['matricule', 'nom', 'prenom', 'CNI']
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return SecretaireNestedSerializer
        else:
            return SecretaireSerializer


class CaissierViewSet(viewsets.ModelViewSet):
    queryset = Caissier.objects.all()
    serializer_class = CaissierSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['matricule', 'nom', 'prenom', 'CNI']
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return CaissierNestedSerializer
        else:
            return CaissierSerializer


class LaborantinViewSet(viewsets.ModelViewSet):
    queryset = Laborantin.objects.all()
    serializer_class = LaborantinSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['matricule', 'nom', 'prenom', 'CNI']
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return LaborantinNestedSerializer
        else:
            return LaborantinSerializer


class MedecinViewSet(viewsets.ModelViewSet):
    queryset = Medecin.objects.all()
    serializer_class = MedecinSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['matricule', 'nom', 'prenom', 'CNI', 'type', 'disponible']
    
    def get(self, request, pk):
        try:
            medecin = Medecin.objects.get(pk=pk)
            medecins = medecin.medecin_set.all()
            serializer = MedecinNestedSerializer(medecins, many=True, context={'request': request})
            return Response(serializer.data)
        except:
            return Response({'error': 'Pas de ùedecin avec le pk fourni!'}, status=status.HTTP_417_EXPECTATION_FAILED)

    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return MedecinNestedSerializer
        else:
            return MedecinSerializer
    
    def get_queryset(self):
        """
        Filtrer le résultat juste en fonction d'un paramètre de disponibilité
        """
        queryset = Medecin.objects.all()
        disponible = self.request.query_params.get('disponible')
        
        if disponible is None:
            return queryset
        
        if disponible.lower() == 'true':
            disponible = True
        elif disponible.lower() == 'false':
            disponible = False
        else:
            disponible = None
        
        if disponible is not None:
            queryset = queryset.filter(disponible=disponible)
        
        return queryset


class ProfilSpecialisteViewSet(viewsets.ModelViewSet):
    queryset = ProfilSpecialiste.objects.all()
    serializer_class = ProfilSpecialisteSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = []


class PermissionViewSet(viewsets.ModelViewSet):
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['personnel']


class AbsenceViewSet(viewsets.ModelViewSet):
    queryset = Absence.objects.all()
    serializer_class = AbsenceSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['personnel']


class RemunerationViewSet(viewsets.ModelViewSet):
    queryset = Remuneration.objects.all()
    serializer_class = RemunerationSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['personnel']


class PointageViewSet(viewsets.ModelViewSet):
    queryset = Pointage.objects.all()
    serializer_class = PointageSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['personnel']


class PeriodeViewSet(viewsets.ModelViewSet):
    queryset = Periode.objects.all()
    filter_backends = [DjangoFilterBackend]
    filterset_class = PeriodeFilter
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return PeriodeNestedSerializer
        else:
            return PeriodeSerializer


class EmploiDeTempsView(views.APIView):
    
    def get(self, request):
        data =  request.body
        serializer = EmploiDeTempsSerializer(data=data)
        if serializer.is_valid():
            semaine = serializer.data['semaine']
            jour = serializer.data['jour']
            heure = serializer.data['heure']
            en_service = serializer.data['en_service']
            personnel = serializer.data['personnel']
            
            res = Periode.produire_emploi_de_temps(
                personnel=personnel,
                semaine=semaine,
                jour=jour,
                heure=heure,
                en_service=en_service,
            )
            response_serializer = PeriodeNestedSerializer(data=res, many=True)
            return Response(response_serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
