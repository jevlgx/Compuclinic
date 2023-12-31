from django.urls import path, include, re_path
from rest_framework import routers

from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from compuclinic_backend.settings import API_BASE_URL

from . import views

# schema_view = get_schema_view(
#     openapi.Info(
#         title="Plateau_technique API",
#         default_version="v1",
#         description="Documentation de l'API du module Plateau_technique",
#     ),
#     public=True,
#     url=API_BASE_URL  + 'api/plateau_technique-api/',
#     urlconf="plateau_tecnique.urls",
# )


router = routers.DefaultRouter()
router.register('infrastructures', views.InfrastructureViewSet)
router.register('batiments', views.BatimentViewSet)
router.register('services', views.ServiceViewSet)
router.register('personnels-infrastructures', views.InfrastructurePersonnelViewSet)
router.register('materiels', views.MaterielViewSet)




urlpatterns = [
    path('lit/liste', views.lit_list),
    path('chambre/liste', views.chambre_list),
    path('batiment/liste', views.batiment_list),
    path('locaux/liste', views.locaux_list),
    path('infrastructures/<pk>/personnel/count/', views.PersonnelInfrastructureCountView.as_view()),
    path('infrastructures/<pk>/materiels/count/', views.MaterielsInfrastructureCountView.as_view()),
    path('infrastructures/<pk>/services/', views.ServicesInfrastructureView.as_view()),
    path('infrastructures/<pk>/services/count/', views.ServicesInfrastructureCountView.as_view()),
    path('infrastructures/<pk>/batiments/count/', views.BatimentsInfrastructureCountView.as_view()),



    # Swagger and Redoc UIS
    # re_path(r"^swagger(?P<format>\.json|\.yaml)$", schema_view.without_ui(cache_timeout=0), name="schema-json"),
    # path("swagger/", schema_view.with_ui('swagger', cache_timeout=0), name="schema-swagger-ui"),
    # path("redoc/", schema_view.with_ui('redoc', cache_timeout=0), name="schema-redoc"),

]