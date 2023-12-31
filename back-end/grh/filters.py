from django_filters import rest_framework as filters
from .models import Periode

class PeriodeFilter(filters.FilterSet):
    min_date = filters.DateFilter(field_name="date", lookup_expr='gte')
    max_date = filters.DateFilter(field_name="date", lookup_expr='lte')
    after_heure_debut = filters.TimeFilter(field_name="heure_debut", lookup_expr='lte')
    before_heure_fin = filters.TimeFilter(field_name="heure_fin", lookup_expr='gte')
    
    class Meta:
        model = Periode
        fields  = ['date', 'personnel', 'en_service', 'min_date', 'max_date', 'after_heure_debut', 'before_heure_fin']
