from django.urls import path, include, re_path
from rest_framework import routers

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from compuclinic_backend.settings import API_BASE_URL

from . import views


schema_view = get_schema_view(
    openapi.Info(
        title="GRH API",
        default_version="v1",
        description="Documentation de l'API du module GRH",
    ),
    public=True,
    url=API_BASE_URL + 'api/grh-api/',
    urlconf="grh.urls",
)


router = routers.DefaultRouter()

router.register('personnels', views.PersonnelViewSet)
router.register('periodes', views.PeriodeViewSet)
router.register('postes', views.PosteViewSet)
router.register('infirmiers', views.InfirmierViewSet)
router.register('secretaires', views.SecretaireViewSet)
router.register('caissiers', views.CaissierViewSet)
router.register('laborantins', views.LaborantinViewSet)
router.register('medecins', views.MedecinViewSet)
router.register('profils-specialiste', views.ProfilSpecialisteViewSet)
router.register('permissions', views.PermissionViewSet)
router.register('absences', views.AbsenceViewSet)
router.register('pointages', views.PointageViewSet)
router.register('remunerations', views.RemunerationViewSet)
urlpatterns = [
      
    path('', include(router.urls)),
    path('emploi_de_temps/', views.EmploiDeTempsView.as_view()),
    path('sandbox/', views.post_datas_sandbox, name="post_personnel_sandbox")
]


