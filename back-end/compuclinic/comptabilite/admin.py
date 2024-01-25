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
    TypeConsultation,
    HistoriqueConsultation,
    ChambreInternement,
    Internement,
    TypeExamen,
    Examen,
    HistoriqueExamenEffectue,
    Operation,
    HistoriqueOpererationEffectue,
    ParticipationOperation,
    Impot,
    HistoriqueImpotPaye,
    TypeDepense,
    HistoriqueDepense,
    TypeMateriel,
    Materiel,
    Achat,
    InventaireStock,
    TransactionMagasin,
    Caisse,
    HistoriqueCaisse,
    TypeAchat,
    employée,
    fournisseur,
    actionnaire,
    investisseur,
    Donnateur,
    patient,
    CategorieObjetMedicaux,
    ObjetMedicaux,
    
    
]

admin.site.register(classes)