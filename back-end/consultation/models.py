from django.db import models
import uuid
from datetime import datetime
from utility.models import Schedule
from secretaire.models import Patient
from grh.models import Medecin
# from utility.models import *


class Consultation(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    #
    schedule = models.OneToOneField(Schedule, on_delete=models.CASCADE, null=True, default=None)
    
    # copier et coller les sympthomes du patient ainsi que ses antécédents juste avant la consultation
    ## should save patient state before any update
    patient = models.ForeignKey(Patient, on_delete=models.SET_NULL, null=True)
    # symptomes = models.CharField(max_length=100, default='', blank=True)
    # antecedents = models.CharField(max_length=100, default='', blank=True)
    medecin = models.ForeignKey(Medecin, on_delete=models.SET_NULL, null=True)
    # note au medecin
    medecin_note = models.TextField(default='', blank=True)

    remarque = models.CharField(max_length=1024, blank=True)
    # prescriptions séparées par des virgules
    prescriptions = models.TextField(default='', blank=True)

    # def __str__(self):
    #     return "Consultation: Patient " + self.patient.nom + " "+ self.patient.prenom + ", Doc " + self.medecin.nom 
    
    def generate_matricule(self):
        # a patient matricule is a string of 14 characters:
        # # the format : PAT[Name][Surname][Day]{2}[Month]{2}[Year]{2}[Number]{3}

        name = self.nom[0].upper()
        surname = '-'
        if self.prenom != '':
            surname = self.prenom[0].upper()
        today = datetime.now()
        day = today.day
        month = today.month
        year = today.year
        number = Consultation.objects.count() + 1

        matricule = f"CS{name}{surname}{day:02d}{month:02d}{year}{number:03d}"
        return matricule
    
