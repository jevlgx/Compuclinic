from django.db import models
import uuid
from django.contrib.auth.models import User
import datetime
TIME_TYPES = (datetime.datetime, datetime.date, datetime.time)
# Create your models here.

class Personnel(models.Model):
    TYPE_PERSONNEL = (
        ('Medecin', "Médecin"),
        ('Caissier', "Caissier"),
        ('Secretaire', "Sécrétaire"),
        ('Infirmer', "Infirmier"),
        ('Laborantin', 'Laborantin'),
        ('Stagiaire', 'Stagiaire'),
        ('Plateau', 'Plateau')  
    )

    ETAT_CIVIL = (
        ('MR', "M."),
        ('MME', 'Mme.'),
        ('MLLE', 'Mlle.')
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type_personnel = models.CharField(choices=TYPE_PERSONNEL, max_length=20, default='')
    nom = models.CharField(max_length=50)
    image = models.ImageField(upload_to="images/personnels/", default=None, null=True)
    prenom = models.CharField(max_length=50)
    # matricule = models.CharField(max_length=20, unique=True)
    matricule = models.CharField(max_length=20)
    etat_civil = models.CharField(choices=ETAT_CIVIL, max_length=5, default='MR')
    poste = models.ForeignKey('Poste', on_delete=models.SET_NULL, null=True, default=None)
    date_naissance = models.DateField(null=True)
    lieu_naissance = models.CharField(max_length=50, null=True)
    nationalite = models.CharField(max_length=50, null=True)
    domicile = models.CharField(max_length=50, null=True)
    date_creation = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(max_length=50)
    telephone = models.CharField(max_length=15, default="")
    CNI = models.CharField(max_length=50, unique=True, null=True)
    should_update_password = models.BooleanField(default=True)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, default=None)

    def __str__(self):
        return "Personnel: " + self.nom + ' ' + self.prenom


class Poste(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nom = models.CharField(max_length=50, unique=True)
    def __str__(self):
        return "Poste: " + self.nom


class Infirmier(Personnel):
    def save(self, *args, **kwargs):
        self.type_personnel = 'Infirmier'
        super().save(*args, **kwargs)

class Secretaire(Personnel):
    def save(self, *args, **kwargs):
        self.type_personnel = 'Secretaire'
        super().save(*args, **kwargs)


class Caissier(Personnel):
    def save(self, *args, **kwargs):
        self.type_personnel = 'Caissier'
        super().save(*args, **kwargs)


class Laborantin(Personnel):
    def save(self, *args, **kwargs):
        self.type_personnel = 'Laborantin'
        super().save(*args, **kwargs)


class Medecin(Personnel):
    TYPE_MEDECIN = (
    ('G', 'Généraliste'),
    ('S', 'Spécialiste')
    )
    type = models.CharField(choices=TYPE_MEDECIN, max_length=5, default='G')
    disponible = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        self.type_personnel = 'Medecin'
        super().save(*args, **kwargs)


class ProfilSpecialiste(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    specialite = models.CharField(max_length=50)
    date_obtention = models.DateField(null=True, default=None)
    medecin = models.OneToOneField('Medecin', on_delete=models.CASCADE)


class Permission(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date_prise_permission = models.DateField()
    date_retour = models.DateField(blank=True)
    duree = models.DurationField()
    justificatif = models.TextField()
    personnel = models.ForeignKey('Personnel', on_delete=models.CASCADE)
    date_creation = models.DateField(auto_now_add=True)


class Remuneration(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date = models.DateTimeField(auto_now_add=True)
    montant = models.PositiveIntegerField()
    personnel = models.ForeignKey('Personnel', on_delete=models.CASCADE)


class Absence(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date_heure = models.DateTimeField()
    justificatif = models.TextField(default='', blank=True)
    personnel = models.ForeignKey('Personnel', on_delete=models.CASCADE)


class Pointage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    date_heure = models.DateTimeField(auto_now_add=True)
    personnel = models.ForeignKey("Personnel", on_delete=models.CASCADE)


def check_time_type(var):
    return isinstance(var, TIME_TYPES)

def check_time_type(var1, var2):
    return check_time_type(var1) and check_time_type(var2) and type(var1) == type(var2)

class Periode(models.Model):
    PERIOD_TYPE = (
    ('repeat', 'Répété'),
    ('fixed', 'Fixé'),
    )

    WEEK_DAYS = (
    (0, 'lundi'),
    (1, 'mardi'),
    (2, 'mercredi'),
    (3, 'jeudi'),
    (4, 'vendredi'),
    (5, 'samedi'),
    (6, 'dimanche'),
    )

    frequence = models.CharField(choices=PERIOD_TYPE, max_length=15, default='repeat')
    date = models.DateField(null=True)
    en_service = models.BooleanField(default=True)
    day = models.PositiveSmallIntegerField(choices=WEEK_DAYS, default=0, null=True)
    heure_debut = models.TimeField()
    heure_fin = models.TimeField()
    personnel = models.ForeignKey('Personnel', on_delete=models.SET_NULL, null=True)
    description = models.TextField(default="")
    sujet = models.CharField(max_length=100, default="Consultation")
    localisation = models.CharField(max_length=100, default="")

    def check_period_consistency(self):
        return self.heure_fin > self.heure_debut

    def save(self, *args, **kwargs):
        # Check if heure_fin > heure_debut
        if not self.check_period_consistency():
            return "Erreur: Heure de Fin avant Heure de début!"

        super().save(*args, **kwargs)

    @classmethod
    def produire_emploi_de_temps(cls, debut=None, fin=None, personnel=None, en_service=None):
        # Initialisation: Vérification des types de var
        if not check_time_type(debut, fin):
            return None
        if debut > fin:
            return []
        
        # séparation des dates et des times
        typo = type(debut)
        
        # Récupération des périodes entre debut et fin
        Q = models.Q
        periodes = cls.objects.all()
        
        if typo is datetime.datetime: # on travaille avec les jours et les heures
            date_range = debut.date(), fin.date()
            time_range = debut.time(), fin.time()
            # On filtre les périodes de type date qui ne sont pas dans la timedelta
            periodes = periodes.filter(date__range=date_range)
            # On filtre les période en fonction de l'heure
            periodes = periodes.filter(Q(heure_debut__range=time_range) | Q(heure_fin__range=time_range))
        elif typo is datetime.date:
            date_range = debut.date(), fin.date()
            periodes = periodes.filter(date__range=date_range)
        else:
            time_range = debut.time(), fin.time()
            periodes = periodes.filter(Q(heure_debut__range=time_range) | Q(heure_fin__range=time_range))
        
        if personnel is not None:
            periodes = periodes.filter(personnel=personnel)
        
        if en_service is not None:
            periodes = periodes.filter(en_service=en_service)
        
        return periodes

    @classmethod
    def produire_emploi_de_temps(cls, personnel=None, semaine=None, jour=None, heure=None, en_service=None):
        if not isinstance(semaine, (datetime.date, datetime.datetime, type(None))):
            return None
        if not isinstance(jour, (datetime.datetime, datetime.date, type(None))):
            return None
        if not isinstance(heure, (datetime.datetime, datetime.time, type(None))):
            return None

        periodes = cls.objects.all()
        if personnel is not None:
            periodes = periodes.filter(personnel=personnel)
        if en_service is not None:
            periodes = periodes.filter(en_service=en_service)

        if heure is not None:
            if type(heure) is datetime.datetime:
                heure = heure.time()
            periodes.filter(heure_debut__lte=heure).filter(heure_fin__gte=heure)
            return periodes

        if jour is not None:
            if type(jour) is datetime.datetime:
                jour = jour.day()
            periodes = periodes.filter(date=jour)
            return periodes
        
        if semaine is not None:
            debut = semaine - datetime.timedelta(days=semaine.weekday())
            debut = debut.day()
            fin = debut + datetime.timedelta(days=6)
            periodes = periodes.filter(date__range=(debut, fin))
            return periodes
        
        return periodes
