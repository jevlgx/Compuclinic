from django.urls import path, include, re_path
from rest_framework import routers

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from compuclinic_backend.settings import API_BASE_URL

from . import views

schema_view = get_schema_view(
    openapi.Info(
        title="Secretariat API",
        default_version="v1",
        description="Documentation de l'API du module Secretariat",
    ),
    public=True,
    url=API_BASE_URL  + 'api/secretariat-api/',
    urlconf="secretariat.urls",
)

router = routers.DefaultRouter()
router.register('patients', views.PatientsViewSet)


urlpatterns = [
    path('', include(router.urls)),
    #
    path('patient/', views.patient_list), 
    path('patient/<pk>/', views.get_patient), 
    path('patient/<pk>/interner/',views.patient_interner),
    path('patient/<pk>/externer/',views.patient_externer),
]