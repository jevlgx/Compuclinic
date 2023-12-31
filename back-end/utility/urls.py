from django.urls import path, include, re_path
from rest_framework import routers

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from compuclinic_backend.settings import API_BASE_URL

from . import views


schema_view = get_schema_view(
    openapi.Info(
        title="Utility API",
        default_version="v1",
        description="Documentation de l'API du module Utility",
    ),
    public=True,
    url=API_BASE_URL + 'api/Utilities-api/',
    urlconf="utility.urls",
)

router = routers.DefaultRouter()

router.register('utilities', views.ScheduleViewSet)
router.register('schedules', views.ScheduleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]