from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Personnel)
admin.site.register(Poste)
admin.site.register(Infirmier)
admin.site.register(Secretaire)
admin.site.register(Caissier)
admin.site.register(Laborantin)
admin.site.register(Medecin)
admin.site.register(Permission)
admin.site.register(Remuneration)
admin.site.register(Absence)
admin.site.register(Pointage)
admin.site.register(Periode)

