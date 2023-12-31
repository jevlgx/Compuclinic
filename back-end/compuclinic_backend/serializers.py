from rest_framework import serializers


class OverviewSerializer(serializers.Serializer):
    """Serializer for the whole app overview"""
    patients_nbr = serializers.IntegerField()
    doctors_nbr = serializers.IntegerField()
    appointments_nbr = serializers.IntegerField()
    employee_nbr = serializers.IntegerField()


