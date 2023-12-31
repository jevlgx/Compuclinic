from django.urls import path, include, re_path
from rest_framework import routers

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from compuclinic_backend.settings import API_BASE_URL

from . import views


schema_view = get_schema_view(
    openapi.Info(
        title="Consultation API",
        default_version="v1",
        description="Documentation de l'API du module Consultation",
    ),
    public=True,
    url=API_BASE_URL + 'api/consultations-api/',
    urlconf="consultation.urls",
)

router = routers.DefaultRouter()

router.register('consultations', views.ConsultationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('consultation/new/', views.post_consultation),
]