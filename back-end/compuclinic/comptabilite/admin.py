from django.contrib import admin
from .models import *
# Register your models here.

classes = [
    Poste,
    Personne,
    Prime,
    PrimeEmploye,
    HistoriquePaiementSalaire,
    Don,
    DonPersonne,
    Investissement,
    Action,
    CategorieMedicament,
    Medicament,
    MedicamentPharmacie,
    Consultation,
    HistoriqueConsultation,
    ChambreInternement,
    Internement,
    Examen,
    HistoriqueExamenEffectue,
    Operation,
    HistoriqueOpererationEffectue,
    ParticipationOperation,
    Impot,
    HistoriqueImpotPaye,
    Depense,
    HistoriqueDepense,
    TypeMateriel,
    Materiel,
    Achat,
    Stock,
    TransactionMagasin,
    Caisse,
    HistoriqueCaisse,
    TypeAchat
]

admin.site.register(classes)