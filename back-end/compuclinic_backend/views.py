from django.shortcuts import render
from .serializers import OverviewSerializer
from rest_framework import viewsets, mixins, views, status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter

@api_view(['GET'])
@authentication_classes([TokenAuthentication])
def app_overview(request, format=None):
    # error with
    # data= [{"patients_nbr": 10, "doctors_nbr": 0, "appointments_nbr": 4, "employee_nbr": 23}]
    # stack : The serializer field might be named incorrectly and not match any attribute or key on the `list` instance.
    #       Original exception text was: 'list' object has no attribute 'patientsnbr'.
    data= {"patients_nbr": 10, "doctors_nbr": 0, "appointments_nbr": 4, "employee_nbr": 23}
    results = OverviewSerializer(data, many=False, context={'request': request}).data
    return Response(results)
    return {
        'user': str(request.user),  # AnonymousUser or `django.contrib.auth.User` instance.
        'auth': str(request.auth),  # None or User auth (basic or session or access token)
        "data": OverviewSerializer(data, many=False, context={'request': request}).data
    }

class OverviewViewSet(views.APIView):
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['matricule', 'nom', 'prenom', 'CNI']
    
    def get(self, request):
        data= [{"patients_nbr": 10, "doctors_nbr": 0, "appointments_nbr": 4, "employee_nbr": 23}]
        results = OverviewSerializer(data, many=False).data
        return Response(results)
