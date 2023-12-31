from django.shortcuts import render

# Create your views here.

from .serializers import *
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class MyObtainTokenPairView(TokenObtainPairView):
    permission_classes = (AllowAny,)
    serializer_class = MyTokenObtainPairSerializer



class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

# class UserView():
#     queryset = User.objects.all()
#     permission_class = (AllowAny,)
#     serializer_class = UserSerializer

# For Test Login, Auth, Token
@api_view(['GET'])
# For Auth
# @authentication_classes([SessionAuthentication, BasicAuthentication, TokenAuthentication])
@authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
def get_current_user(request, pk, format=None):
    #try:
        #print(pk)
        user = Token.objects.get(key=pk).user
        # user = Token.objects.get(user=pk).user
        # user = User.objects.get(pk=pk)
        # user = request.user
        print(user)
        # print(request)
        # serializer = UserSerializer(user, many=False, context={'request': request})
        #token = Token.objects.create(user=...)
        #print(token.key)
        #return Response(serializer.data)
        auth_content = {
            'user': str(request.user),  # AnonymousUser or `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None or User auth (basic or session or access token)
            "data": UserSerializer(request.user, many=False, context={'request': request}).data
        }
        
        return Response(auth_content)
    #except:
    #    return Response({'error': 'Pas de connexion en cours avec le Token fourni!'}, status=status.HTTP_417_EXPECTATION_FAILED)

@api_view(['GET'])
# For Auth
@authentication_classes([TokenAuthentication])
# @permission_classes([IsAuthenticated])
def get_loggedin_user(request, format=None):
    auth_content = {
        'user': str(request.user),  # AnonymousUser or `django.contrib.auth.User` instance.
        'auth': str(request.auth),  # None or User auth (basic or session or access token)
        "data": UserSerializer(request.user, many=False, context={'request': request}).data
    }
    if(auth_content.get('user') is not 'AnonymousUser'): 
        return Response(auth_content)
    else:
       return Response({'error': 'Pas de connexion en cours avec le Token fourni!'}, status=status.HTTP_417_EXPECTATION_FAILED)
    

class LoginAPIView(ObtainAuthToken):
    """This api will handle login and return token for authenticate user."""
    def post(self,request):
        serializer = LoginSerializer(data = request.data)
        if serializer.is_valid():
            username = serializer.validated_data["username"]
            password = serializer.validated_data["password"]
            user = authenticate(request, username=username, password=password)
            if user is not None:
                """We are reterving the token for authenticated user."""
                # token = Token.objects.get(user=user)
                # token = Token.objects.create(user=user)
                token,created = Token.objects.get_or_create(user=user)
                print(token)
                response = {
                    "status": status.HTTP_200_OK,
                    "message": "success",
                    "data": {
                        "token" : token.key,
                        # "user": user
                        "user" : UserSerializer(user, many=False, context={'request': request}).data
                    }
                }
                return Response(response, status = status.HTTP_200_OK)
            else :
                response = {
                    "status": status.HTTP_401_UNAUTHORIZED,
                    "message": "Invalid Email or Password",
                }
                return Response(response, status = status.HTTP_401_UNAUTHORIZED)
        response = {
            "status": status.HTTP_400_BAD_REQUEST,
            "message": "bad request",
            "data": serializer.errors
        }
        return Response(response, status = status.HTTP_400_BAD_REQUEST)
    
