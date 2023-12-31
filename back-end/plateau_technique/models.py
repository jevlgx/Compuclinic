from django.db import models
import uuid
from datetime import datetime

# Create your models here.

#on part du principe qu'un batiment possède plusieurs chambre et qu'une chambre peut avoir 1 ou plusieurs lit
#une chambre commune a plusieurs chambre et une chambre vip n'en possde qu'une seule
class Infrastructure(models.Model):


    CLASSES = (
    ('A', "A"),
    ('B', 'B'),
    ('C', 'C'),
    )

    id = models.UUIDField(primary_key= True, default= uuid.uuid4, editable=False)
    nom = models.CharField(max_length=225, unique=True)
    classe = models.CharField(choices=CLASSES, max_length=2, default='C')
    image = models.ImageField(null=True, blank=True, upload_to='images/infrastructures')
    localisation = models.CharField(max_length=50)
    latitude = models.CharField(max_length=50, default="")
    longitude = models.CharField(max_length=50,default="")
    ville = models.CharField(max_length=30)
    telephone = models.CharField(max_length=30)
    fax = models.CharField(max_length=50, blank=True, null=True)
    email = models.EmailField(max_length=50, blank=True, null=True)
    site_web = models.URLField(max_length=100, blank=True, null=True)
    date_creation = models.DateField()
    date_enregistrement = models.DateTimeField(auto_now_add=True)
    directeur = models.ForeignKey('grh.Personnel', on_delete=models.SET_NULL, null=True) 

    def __str__(self):
        return "Infra: " + self.nom

class InfrastructurePersonnel(models.Model):
    infrastructure = models.ForeignKey(Infrastructure, on_delete=models.SET_NULL, null=True)
    personnel = models.ForeignKey('grh.Personnel', on_delete=models.SET_NULL, null=True)
    date_embauche = models.DateField(null=True, default=None)



class Batiment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nom = models.CharField(max_length=50)
    description = models.TextField(blank=True, default='')

    def __str__(self):
        return "Batiment: " + self.nom
    

class Local(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nom = models.CharField(max_length=50)
    image = models.ImageField(upload_to="images/locaux/", null=True, default=None)
    supericie = models.PositiveIntegerField(help_text="En mètres carré", blank=True, null=True, default=None)
    localisation = models.CharField(max_length=50, blank=True)
    batiment = models.ForeignKey(Batiment, on_delete=models.CASCADE, null=True, default=None)
    description = models.TextField(blank=True, default='')

    def __str__(self):
        return "Local: " + self.nom

class Chambre(models.Model):
    
    TYPE_CHAMBRE=(
        ('commune','commune'),
        ('Vip','Vip')
        )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero = models.PositiveIntegerField(default='')
    batiment = models.ForeignKey(Batiment, on_delete=models.CASCADE, null=True, default=None)
    type = models.CharField(max_length=8, choices=TYPE_CHAMBRE, default='commune')
    Nombre_lit=models.PositiveIntegerField(default= 1)
    description = models.TextField(blank=True, default='')

    def __str__(self):
        return "Local: " + self.numero


class Lit(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    numero = models.PositiveIntegerField(default=0)
    est_libre = models.BooleanField(default=True)
    date_enregistrement = models.DateTimeField(auto_now_add=True, editable=False)
    chambre = models.ForeignKey(Chambre, on_delete=models.SET_NULL, null=True)


class Materiel(models.Model):

    TYPE_MATERIEL = (
    ('Informatique', 'Informatique'),
    ('Medical', 'Médical'),
    ('Mobilier', 'Mobilier'),
    ('Electronique', 'Electronique'),
    ('Bureau', 'Bureau'),
    )
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nom = models.CharField(max_length=50)
    image = models.ImageField(upload_to="images/materiels/", default=None, null=True)
    numero_serie = models.CharField(max_length=100, default="")
    date_arrivage = models.DateTimeField(auto_now_add=True)
    local = models.ForeignKey(Local, on_delete=models.CASCADE)
    type = models.CharField(choices=TYPE_MATERIEL, default='Medical', max_length=50)

    def __str__(self):
        return "Materiel: " + self.nom
    


class Service(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nom = models.CharField(max_length=100, default="")
    image = models.ImageField(null=True, blank=True, upload_to='images/services', default=None)
    chef = models.ForeignKey('grh.Personnel', on_delete=models.CASCADE, null=True, default=None)
    batiment = models.ForeignKey('plateau_technique.Batiment', on_delete=models.CASCADE)
    # local = models.ForeignKey('Local', on_delete=models.SET_NULL, default=None, null=True)

    def __str__(self):
        return "Service: " + self.nom
    

