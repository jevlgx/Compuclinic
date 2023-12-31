from django.db import models
from secretaire.models import *

# Create your models here.
class Examen(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero=models.PositiveIntegerField()
    patient=models.ForeignKey('secretaire.Patient', on_delete=models.SET_NULL, null=True)
    designation=models.CharField(max_length=15)
    #medecin=models.Charfield('grh.medecin', on_delete=models.SET_NULL, null=True)
    #laborantin=models.Charfield('grh.laborantin', on_delete=models.SET_NULL, null=True)


#un buletin d'examen peut concerner plusieurs examen d'où la creation du models ligneExam
class LigneExamen(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    examen=models.ForeignKey('examen', on_delete=models.SET_NULL, null=True)
    prélevement=models.CharField(max_length=15)
    paramètre=models.CharField(max_length=15)
    val_trouvée=models.CharField(max_length=15)
    observation=models.CharField(max_length=50)


