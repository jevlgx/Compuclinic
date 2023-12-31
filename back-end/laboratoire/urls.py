from django.urls import path, include, re_path
from rest_framework import routers

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from compuclinic_backend.settings import API_BASE_URL

from . import views

schema_view = get_schema_view(
    openapi.Info(
        title="Laborantin API",
        default_version="v1",
        description="Documentation de l'API du module Laborantin",
    ),
    public=True,
    url=API_BASE_URL  + 'api/Laborantin-api/',
    urlconf="laborantin.urls",
)

urlpatterns = [
    path('laborantin/liste', views.examen_list), 
    path('laborantin/<pk>/update_exam',views.examen_update),
    path('laborantin/<pk>/delete_exam',views.examen_delete),
    path('laborantin/<pk>/update_ligneExam',views.ligneExamen_update),
    path('laborantin/<pk>/dele_ligneExam',ligneExamen_delete),
    path('laborantin/<pk>/list_ligneExamen', views.ligneExamen_list), 
    path('laborantin/create', views.ligneExamen_create), 
]