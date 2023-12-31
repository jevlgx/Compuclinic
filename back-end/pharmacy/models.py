from django.db import models
import uuid
from datetime import datetime

class Medicament(models.Model):

    RESTRICTIONS = (
        ('A', 'Aucunes'),
        ('FA', 'Femmes Enceintes'),
        ('ENFANTS', 'Enfants (-12 ans)')
    )
    STATUT_MEDICAMENT=(
        ('OutOfStock', 'OutOfStock'),
        ('Available', 'Available')
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=20,unique=True)
    nom_court = models.CharField(max_length=100, blank=True)
    nom = models.CharField(max_length=100, default='')
    prix = models.IntegerField(default=2000)
    #
    description = models.CharField(max_length=500, blank=True)
    notice = models.TextField(blank=True)
    # liens de références sur le net (séparés par une virgule)
    references = models.TextField(blank=True)
    # séparées par une virgule
    maladies = models.CharField(max_length=1024, blank=True)
    #
    statut = models.CharField(max_length=10, choices=STATUT_MEDICAMENT, default='Available')
    restrictions = models.CharField(max_length=8, choices=RESTRICTIONS, default='A')
    antecedent = models.TextField(default='')

    def __str__(self):
        return "Medicament: " + self.nom +self.prenom
    
    def generate_code(self):
        # a patient matricule is a string of 14 characters:
        # # the format : PAT[Name][Surname][Day]{2}[Month]{2}[Year]{2}[Number]{3}

        name = self.nom[0].upper()
        today = datetime.now()
        day = today.day
        month = today.month
        year = today.year
        number = Medicament.objects.count() + 1

        code = f"CS{name}{day:02d}{month:02d}{year}{number:03d}"
        return code
    
