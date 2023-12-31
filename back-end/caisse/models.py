from django.db import models
from secretaire.models import Patient
from datetime import datetime
import uuid


# Create your models here.

class Facture (models.Model):
    PRESTATIONS = (
    ('Q-CONSULT_spécialiste', 'Consultation médecin specialiste'),
    ('Q-CONSULT_généraliste', 'Consultation médecin généraliste'),
    ('Q-RENDEZ-VOUS_spécialiste', 'rendez-vous médecin specialiste'),
    ('Q-RENDEZ-VOUS_généraliste', 'rendez-vous médecin généraliste'),
    ('Q-EXAM', 'Examen'),
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    patient = models.ForeignKey('secretaire.Patient', on_delete=models.SET_NULL, null=True)
    numero = models.CharField(max_length=15)
    date_creation = models.DateTimeField(auto_now_add=True)
    #caissier = models.ForeignKey('grh.Caissier', on_delete=models.CASCADE)
    prestation = models.CharField(max_length=40, choices=PRESTATIONS)
    montant_TTC = models.PositiveIntegerField(null=False)
    est_paye = models.BooleanField(default=False)


# Product/Service
class BillElement(models.Model):
    BILLELEMENT_TYPE=(
        ('Product', 'Product'), # produit pharmacetique
        ('Service', 'Service'), # service de l'hôpital
    )
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=25, null=True)
    description = models.TextField(null=True, default="")
    montant = models.IntegerField()
    type = models.BooleanField(max_length=25, choices=BILLELEMENT_TYPE, default='Service')
  
# Facture
class Bill(models.Model):
    BILL_STATUT=(
        ('Paid', 'Paid'),
        ('UnPaid', 'UnPaid')
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero = models.IntegerField()
    patient = models.ForeignKey(Patient, on_delete=models.SET_NULL, null=True)
    montant = models.IntegerField()
    elements = models.ManyToManyField(BillElement, blank=True)
    statut = models.BooleanField(max_length=8, choices=BILL_STATUT, default='UnPaid')
    
    