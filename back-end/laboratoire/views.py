from django.shortcuts import render
from rest_framework import viewsets,status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *
from .models import *

# Create your views here.
@api_view(['GET','POST'])
def examen_list(request):
    if request.method == 'GET':
        data = Examen.objects.all().order_by('numero')

        serializer = ExamenSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        data=request.data
        data.numero=examens.count()+1
        serializer = ExamenSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def examen_update(request, pk):  
    try:
        examen = Examen.objects.get(pk=pk)
    except Examen.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = ExamenSerializer(examen, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE','GET'])
def examen_delete(request, pk):
    try:
        examen = Examen.objects.get(pk=pk)
    except Examen.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    #on supprime tous les examens contenu dans ce bulletin d'examen
    #ligneExamen=LigneExamen.Object.get(patient=pk)
    for examen in ligneExamen:
        examen.delete()
    examen.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def ligneExamen_create(request):
    data=request.data
    serializer = LigneExamenSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#recuperer la liste d'examen d'un bulletin d'examen donnée,
@api_view(['GET'])
def ligneExamen_list(request,pk):
    data = LigneExamen.objects.get(examen=pk)
    serializer = ExamenSerializer(data, context={'request': request}, many=True)
    return Response(serializer.data)

#modifier un examen donnée d'un bulletin d'examen
@api_view(['PUT'])
def ligneExamen_update(request, pk):  
    try:
        ligneExamen = LigneExamen.objects.get(pk=pk)
    except LigneExamen.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = LigneExamenSerializer(ligneExamen, data=request.data,context={'request': request})
    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE','GET'])
def ligneExamen_delete(request, pk):
    try:
        ligneExamen = LigneExamen.objects.get(pk=pk)
    except LigneExamen.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    ligneExamen.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

