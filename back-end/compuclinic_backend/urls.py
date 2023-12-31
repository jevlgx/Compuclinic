"""compuclinic_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
# from secretaire import views
# from plateau_technique import views
# from grh import views
from . import views

router = routers.DefaultRouter()

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/overview/', views.app_overview),
    path('api/consultations/', include('consultation.urls')),
    path('api/secretaire/', include('secretaire.urls')),
    path('api/plateau_technique/', include('plateau_technique.urls')),
    
    #path('api/caisse/', include('caisse.urls')),
    
    path('api/grh/', include('grh.urls')),
    path('api/auth/', include('auth.urls')),
    path('api/utils/', include('utility.urls')),
]
