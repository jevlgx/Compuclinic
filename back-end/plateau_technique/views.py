from django.shortcuts import render
from rest_framework import viewsets,status,views
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
from .models import *
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter,OrderingFilter

# Create your views here.
@api_view(['GET','POST'])
def lit_list(request):
    if request.method == 'GET':
        data = Lit.objects.all().order_by('chambre')

        serializer = LitSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        data.est_libre=False
        serializer = LitSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def chambre_list(request):
    if request.method == 'GET':
        data = Chambre.objects.all().order_by('numero')
        serializer = ChambreSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ChambreSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def batiment_list(request):
    if request.method == 'GET':
        data = Batiment.objects.all().order_by('nom')

        serializer = BatimentSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BatimentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET','POST'])
def locaux_list(request):

    if request.method == 'GET':
        data = Local.objects.all().order_by('nom')
        serializer = LocalSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        serializer = LocalSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class MaterielsInfrastructureCountView(views.APIView):
    def get(self, request, pk):
        TYPE_MATERIEL = (
        ('Informatique', 'Informatique'),
        ('Medical', 'Médical'),
        ('Mobilier', 'Mobilier'),
        ('Electronique', 'Electronique'),
        ('Bureau', 'Bureau'),
        )
        # Récupérer le nombre des services par infrastructure dans la BD
        infrastructure = get_object_or_404(Infrastructure, pk=pk)
        batiments = infrastructure.batiment_set.all()
        locaux = Local.objects.filter(batiment__in=batiments)
        materiels = Materiel.objects.filter(local__in=locaux)
        
        # Décompte des équipements par type
        result =  {}
        
        # On récupère d'abord la liste des types d'equipements : .enums.TYPE_EQUIPEMENT
        # Pour chaque type d'équipements, on fait le décompte et on ajoute dans le résultat. Si le décompte est null, on ne prends pas en compte
        for type_eq in TYPE_MATERIEL:
            val = type_eq[0]
            label = type_eq[1]
            count = materiels.filter(type=val).count()
            result[label] = count

        return Response(result)

class MaterielViewSet(viewsets.ModelViewSet):
    queryset = Materiel.objects.all()
    serializer_class = MaterielSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['local', 'type', 'nom']
    search_fields = ['nom', 'type']

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return MaterielNestedSerializer
        else:
            return MaterielSerializer
        
class BatimentViewSet(viewsets.ModelViewSet):
    queryset = Batiment.objects.all()
    serializer_class = BatimentSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['nom']
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return BatimentNestedSerializer
        else:
            return BatimentSerializer


class BatimentsInfrastructureCountView(views.APIView):
    
    def get(self, request, pk):
        # Récupérer le nombre des services par infrastructure dans la BD
        infrastructure = get_object_or_404(Infrastructure, pk=pk)
        nbr = infrastructure.batiment_set.count()

        return Response({'total': nbr})

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filterset_fields = ['chef', 'nom', 'batiment']
    search_fields = ['nom']
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return ServiceNestedSerializer
        else:
            return ServiceSerializer


class ServicesInfrastructureView(views.APIView):
    
    def  get(self, request, pk):
        # Récupérer la liste des services par infrastructure dans la BD
        infrastructure = get_object_or_404(Infrastructure, pk=pk)
        batiments = infrastructure.batiment_set.all()
        services = Service.objects.filter(batiment__in=batiments)
        
        # Serializer et Afficher les résultats de recherche
        serializer = ServiceNestedSerializer(services, many=True)
        return Response(serializer.data)


class ServicesInfrastructureCountView(views.APIView):

    
    def get(self, request, pk):
        # Récupérer le nombre des services par infrastructure dans la BD
        infrastructure = get_object_or_404(Infrastructure, pk=pk)
        batiments = infrastructure.batiment_set.all()
        nbr = Service.objects.filter(batiment__in=batiments).count()

        return Response({'total': nbr})
    


class InfrastructureViewSet(viewsets.ModelViewSet):
    queryset = Infrastructure.objects.all().order_by('nom')
    serializer_class = InfrastructureSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['nom', 'ville', 'localisation']
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return InfrastructureNestedSerializer
        else:
            return InfrastructureSerializer


class InfrastructurePersonnelViewSet(viewsets.ModelViewSet):
    queryset = InfrastructurePersonnel.objects.all()
    serializer_class = InfrastructurePersonnelCreateSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['infrastructure', 'personnel']
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return InfrastructurePersonnelNestedSerializer
        else:
            return InfrastructurePersonnelCreateSerializer



class PersonnelInfrastructureCountView(views.APIView):
    
    def get(self, request, pk):
        TYPE_PERSONNEL = (
    ('Medecin', "Médecin"),
    ('Caissier', "Caissier"),
    ('Secretaire', "Sécrétaire"),
    ('Infirmer', "Infirmier"),
    ('Laborantin', 'Laborantin'),
    ('Stagiaire', 'Stagiaire')
)

        infrastructure = get_object_or_404(Infrastructure, pk=pk)
        personnels_infra = infrastructure.infrastructurepersonnel_set.all()

        result = {}
        for entry in TYPE_PERSONNEL:
            val, label = entry
            count = personnels_infra.filter(personnel__type_personnel=val).count()
            result[label] = count
        
        return Response(result)

