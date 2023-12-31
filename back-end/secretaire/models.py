from django.db import models
import uuid
from datetime import datetime
from plateau_technique.models import Lit


class Patient(models.Model):

    SEXE = (
        ('M', 'Masculin'),
        ('F', 'Feminin')
    )
    STATUT_PATIENT=(
        ('Externe', 'Externe'),
        ('Interne', 'Interne')
    )
    TYPE_GROUP_SANGUIN = (
        ('A+', 'A+'),
        ('A-', 'A-'),
        ('B+', 'B+'),
        ('B-', 'B-'),
        ('AB+', 'AB+'),
        ('AB-', 'AB-'),
        ('O+', 'O+'),
        ('O-', 'O-'),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    #
    temperature = models.CharField(max_length=100, default='')
    weight = models.CharField(max_length=100, default='')
    height = models.CharField(max_length=100, default='')
    pressure = models.CharField(max_length=100, default='')
    #
    group_sanguin = models.CharField(choices=TYPE_GROUP_SANGUIN, max_length=10, default='')
    sexe = models.CharField(max_length=1, choices=SEXE, default='M')
    date_naissance = models.DateField(blank=True, null=True)
    symptomes = models.TextField(default='')
    antecedent = models.TextField(default='')
    #
    matricule = models.CharField(max_length=20, unique=True, null=True)
    # matricule = models.CharField(max_length=20, null=True)
    nom = models.CharField(max_length=100, null=True)
    prenom = models.CharField(max_length=100, default='')
    telephone = models.CharField(max_length=15, default='')
    CNI = models.CharField(max_length=20, default='')
    #
    lieu_naissance = models.CharField(max_length=20, default='')
    nationalite = models.CharField(max_length=50, default='Camerounais')
    profession = models.CharField(max_length=50, default='Eleve')
    lieu_travail = models.CharField(max_length=50, default='', blank=True)
    telephone_lieu_travail = models.CharField(max_length=15, default='', blank=True)
    domicile = models.CharField(max_length=20, default='', blank=True)
    statut = models.CharField(max_length=8, choices=STATUT_PATIENT, default='Externe')

    def __str__(self):
        return "Patient: " + self.nom + " " + self.prenom
    
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
        number = Patient.objects.count() + 1

        matricule = f"PAT{name}{surname}{day:02d}{month:02d}{year}{number:03d}"
        return matricule
    
    

    
class Internement(models.Model):
    patient = models.ForeignKey('Patient', on_delete=models.SET_NULL, null=True)
    lit = models.ForeignKey('plateau_technique.Lit', on_delete=models.SET_NULL, null=True)
    date_internement = models.DateTimeField(auto_now_add=True, editable=False)
    date_sortie = models.DateTimeField(null=True, default=None)
    en_cours = models.BooleanField(default=True)
    
   