from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework import viewsets, mixins, views, status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['matricule', 'nom', 'prenom', 'CNI']
    
    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return ScheduleNestedSerializer
        else:
            return ScheduleSerializer
