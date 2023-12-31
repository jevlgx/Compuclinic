from django.db import models
import uuid
from datetime import datetime
from grh.models import Personnel
from secretaire.models import Patient

class Task(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    task = models.TextField(default='Task')
    personnel = models.ForeignKey(Personnel, on_delete=models.SET_NULL, null=True, default=None, blank=True)

    # def __str__(self):
    #     return "Tache : " + self.personnel.nom

# Plannings et Emploie de temps

class Schedule(models.Model):

    STATUT_PLANNING=(
        ('Planned', 'Planned'),
        ('Not_Allocated', 'Not_Allocated'),
        ('Allocated', 'Allocated'),
        ('Running', 'Running'),
        ('Canceled', 'Canceled'),
        ('Terminated', 'Terminated')
    )
    #
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    #
    guest_medecin = models.ForeignKey(Personnel, related_name='schedule_id', on_delete=models.SET_NULL, null=True, default=None)
    # guest = models.OneToOneField(Personnel, on_delete=models.SET_NULL, null=True, default=None)
    # id des l'invités (patient ou personnel) séparés par une virgule
    # guests = models.CharField(max_length=20, default='', blank=True)
    guest_patient = models.ForeignKey(Patient, related_name='schedule_id', on_delete=models.SET_NULL, null=True, default=None)
    guests = models.ManyToManyField(Personnel, blank=True)
    #
    # date_debut = models.DateField(auto_now=True, blank=True, null=True)
    date_debut = models.DateTimeField(auto_now_add=True, null=True)
    # duree en minutes
    duree = models.IntegerField(default=60)
    date_fin = models.DateTimeField(auto_now=False, blank=True, null=True)
    lieu = models.CharField(max_length=20, default='Bloc 1')
    statut = models.CharField(max_length=20, choices=STATUT_PLANNING, default='Planned')

    # def __str__(self):
    #     #return "Rendez vous : " + self.guest_medecin.nom + " - "+ self.guest_patient.nom 
    #     #f"RDV: {self.guest_medecin.nom}---{self.guest_patient.nom}"
    #     f"RDV: --"
    
    
