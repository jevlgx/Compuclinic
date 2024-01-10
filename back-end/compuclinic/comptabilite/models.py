from django.core.validators import MaxValueValidator, MinValueValidator
from django.core.validators import RegexValidator
from django.core.exceptions import ValidationError
from django.db import models

# Create your models here.
# Les identifiants sont automatiquement generés par django
class Poste(models.Model):
	nom = models.CharField(max_length = 20)
	particularite  = models.CharField(max_length = 20)

class Personne(models.Model):
	matricule = models.IntegerField(primary_key=True ,validators=[MinValueValidator(10000000), MaxValueValidator(99999999)])
	idPoste = models.ForeignKey(Poste, on_delete=models.CASCADE)
	nom  = models.CharField(max_length = 20)
	tel = models.IntegerField(validators=[MinValueValidator(600000000), MaxValueValidator(699999999)])
	cni  = models.CharField(max_length = 20)
	email = models.CharField(max_length = 160)
	adresse = models.CharField(max_length = 100)
	commentaire = models.CharField(max_length = 100)
	salaireDeBase = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(9999999)])


class Prime(models.Model):
	type = models.CharField(max_length = 20)
	description  = models.CharField(max_length = 20)
	prix = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(9999999)])
	
class PrimeEmploye(models.Model):
	idPrime = models.ForeignKey(Prime, on_delete=models.CASCADE)
	matriculeEmploye = models.ForeignKey(Personne, on_delete=models.CASCADE)
	date = models.DateField()
	commentaire = models.CharField(max_length = 20)

class HistoriquePaiementSalaire(models.Model):
	matriculeEmploye = models.ForeignKey(Personne, on_delete=models.CASCADE)
	sommePercue = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(9999999)])
	date = models.DateField()
    # on a pas le temps pour gerer les photos de buletin de paie
	
class Don(models.Model):
	date = models.DateField()
	description = models.CharField(max_length = 20)
	type = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1)])
	def clean(self):
		if not self.type or not (self.type == 0 or self.type == 1):
			raise ValidationError("La date doit être égale à a ou b.")
	somme = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(99999999)])
	destination = models.CharField(max_length = 20)

class DonPersonne(models.Model):
	idDon = models.ForeignKey(Don, on_delete=models.CASCADE)
	matriculeDonateur = models.ForeignKey(Personne, on_delete=models.CASCADE)

class Investissement(models.Model):
	matriculeInvestisseur = models.ForeignKey(Personne, on_delete=models.CASCADE)
	somme = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(99999999)])
	pourcentage = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5000)])
	dateDebut = models.DateField()
	dateFin = models.DateField()
	
class Action(models.Model):
	matriculeActionnaire = models.ForeignKey(Personne, on_delete=models.CASCADE)
	nombreActions = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(10000)])
	dateDebut = models.DateField()

class CategorieMedicament(models.Model):
	nomCathegorie = models.CharField(max_length = 20)

class Medicament(models.Model):
	matricule = models.IntegerField(primary_key=True ,validators=[MinValueValidator(10000000), MaxValueValidator(99999999)])
	idCategorie = models.ForeignKey(CategorieMedicament, on_delete=models.CASCADE)
	nom = models.CharField(max_length = 20)
	description = models.CharField(max_length = 100)
	prixUnitaireDeVente = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(1000000)])

class MedicamentPharmacie(models.Model):
	matriculeMedicament = models.ForeignKey(Medicament, on_delete=models.CASCADE)
	quantite = models.CharField(max_length = 10000)
	datePeremption = models.DateField()
	commentaire = models.CharField(max_length = 100)
	
class Consultation(models.Model):
	matricule = models.IntegerField(primary_key=True ,validators=[MinValueValidator(10000000), MaxValueValidator(99999999)])
	type = models.CharField(max_length = 20)
	prix = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100000)])
	commentaires = models.CharField(max_length = 100)

class HistoriqueConsultation(models.Model):
	matriculePatient = models.ForeignKey(Personne,related_name='matriculePatientHistoriqueConsultation', on_delete=models.CASCADE)
	matriculeMedecin = models.ForeignKey(Personne,related_name='matriculeMedecinHistoriqueConsultation', on_delete=models.CASCADE)
	MatriculeConsultation = models.ForeignKey(Consultation, on_delete=models.CASCADE)
	diagnostique = models.CharField(max_length = 1000)
	date = models.DateField() 

class ChambreInternement(models.Model):
	numeroChambre = models.IntegerField(primary_key=True ,validators=[MinValueValidator(0), MaxValueValidator(9999)])
	prix = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(9999999)])
	
	standard_choices = [
        ('0', 'Classique'),
        ('1', 'VIP'),
        ('2', 'Prestige'),
        ('3', 'Gold'),
    ]
	standard = models.CharField(max_length=1, choices=standard_choices, validators=[
        RegexValidator(r'^[0-3]$', 'La catégorie doit être comprise entre 0 et 3.')
    ])
	
	capacite = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(9999)])
	description = models.CharField(max_length = 100)
	service = models.CharField(max_length = 100)

class Internement(models.Model):
	matriculePatient = models.ForeignKey(Personne, on_delete=models.CASCADE)
	numeroChambre = models.ForeignKey(ChambreInternement, on_delete=models.CASCADE)
	numeroLit = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(9999)])
	dateDebut = models.DateField()
	dateFin = models.DateField()
	commentaire = models.CharField(max_length = 1000)

class Examen(models.Model):
	nom = models.CharField(max_length = 100)
	description = models.CharField(max_length = 100)
	prix = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(999999)])
	
class HistoriqueExamenEffectue(models.Model):
	idExamen = models.ForeignKey(Examen, on_delete=models.CASCADE)
	matriculePatient = models.ForeignKey(Personne, on_delete=models.CASCADE)
	dateDepot = models.DateField()
	dateRetrait = models.DateField()
	resultat = models.CharField(max_length = 100)

class Operation(models.Model):
	nom = models.CharField(max_length = 100)
	description = models.CharField(max_length = 100)
	prix = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(999999)])

class HistoriqueOpererationEffectue(models.Model):
	idOperation = models.ForeignKey(Operation, on_delete=models.CASCADE)
	matriculePatient = models.ForeignKey(Personne, on_delete=models.CASCADE)
	date = models.DateField()

class ParticipationOperation(models.Model):
	idOperation = models.ForeignKey(Operation, on_delete=models.CASCADE)
	matriculeMedecin = models.ForeignKey(Personne, on_delete=models.CASCADE)

class Impot(models.Model):
	nom = models.CharField(max_length = 100)
	description = models.CharField(max_length = 100)
	prix = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(999999)])
	porcentage = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)])

class HistoriqueImpotPaye(models.Model):
	idImpot = models.ForeignKey(Impot, on_delete=models.CASCADE)
	#Id photo facture pas de temps pour implementer
	date = models.DateField()

class Depense(models.Model):
	matricule = models.IntegerField(primary_key=True ,validators=[MinValueValidator(10000000), MaxValueValidator(99999999)])
	nom = models.CharField(max_length = 20)
	description = models.CharField(max_length = 100)

class HistoriqueDepense(models.Model):
	matriculeDepense = models.ForeignKey(Depense, on_delete=models.CASCADE)
	date = models.DateField()
	prix = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(9999999)])
	commentaire = models.CharField(max_length = 100)
	#Id photo facture pas de temps pour implementer

class TypeMateriel(models.Model):
	nom = models.CharField(max_length = 20)
	description = models.CharField(max_length = 100)
	
class Materiel(models.Model):
	idTypeMateriel = models.ForeignKey(TypeMateriel, on_delete=models.CASCADE)
	nom = models.CharField(max_length = 20)
	description = models.CharField(max_length = 100)

class Achat(models.Model):
	motif = models.CharField(max_length = 20)
	matriculeObjetAchete= models.IntegerField(validators=[MinValueValidator(10000000), MaxValueValidator(99999999)])
	quantite = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(9999)])
	date = models.DateField()
	prixTotal = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(99999999)])
	#Id photo facture pas de temps pour implementer

class Stock(models.Model):
	motif = models.CharField(max_length = 20)
	matriculeObjetStocke= models.IntegerField(validators=[MinValueValidator(10000000), MaxValueValidator(99999999)])
	quantite = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(9999)])
	datePeremption = models.DateField()
	commentaire = models.CharField(max_length = 20)
	
class TransactionMagasin(models.Model):
	date = models.DateField()
	matriculeObjetDeplace = models.IntegerField(validators=[MinValueValidator(10000000), MaxValueValidator(99999999)])
	quantite = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(9999)])
	magasinDeDepart = models.CharField(max_length = 20)
	magasinArrivee = models.CharField(max_length = 20)
	status = models.CharField(max_length = 20)
	def clean(self):
		if not self.status or not (self.status == 0 or self.status == 1):
			raise ValidationError("Le statut indique si la transaction a été effectuer avec succes (1) ou pas (0)")

class Caisse(models.Model):
	nom = models.CharField(max_length = 20)
	description = models.CharField(max_length = 100)

class HistoriqueCaisse(models.Model):
	idCaisse = models.ForeignKey(Caisse, on_delete=models.CASCADE)
	matriculeCaissiere = models.ForeignKey(Personne, on_delete=models.CASCADE)
	date = models.DateField()
	matriculeObjetAchete = models.IntegerField(validators=[MinValueValidator(10000000), MaxValueValidator(99999999)])
	quantite = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(9999)])
	prix = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(99999999)])
	#Id photo facture pas de temps pour implementer