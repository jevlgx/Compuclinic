from django.urls import path, include, re_path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from compuclinic_backend.settings import API_BASE_URL

from . import views

schema_view = get_schema_view(
    openapi.Info(
        title="caisse API",
        default_version="v1",
        description="Documentation de l'API du module caisse",
    ),
    public=True,
    url=API_BASE_URL  + 'api/caisse-api/',
    urlconf="caisse.urls",
)

urlpatterns = [
    path('facture/liste', views.facture_list), 
    path('facture/<pk>/supprimer', views.facture_supprimer),
    path('facture/<pk>/payer', views.facture_payer),
    path('facture/<pk>/pdf',views.facture_pdf),
    
]