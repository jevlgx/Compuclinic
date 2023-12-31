from django.urls import path, include, re_path
from rest_framework import routers

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from compuclinic_backend.settings import API_BASE_URL

from . import views


schema_view = get_schema_view(
    openapi.Info(
        title="Pharmacy API",
        default_version="v1",
        description="Documentation de l'API du module Pharmacy",
    ),
    public=True,
    url=API_BASE_URL + 'api/Pharmacys-api/',
    urlconf="pharmacy.urls",
)

router = routers.DefaultRouter()

router.register('medicaments', views.MedicamentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]