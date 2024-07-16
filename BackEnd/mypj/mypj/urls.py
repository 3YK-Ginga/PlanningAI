from django.contrib import admin
from django.urls import path

from yuta_travel.views import login
from yuta_travel.views import registration
from yuta_travel import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("login.html/", login),
    path("", login),
    #path("Registration.html/", registration),
    path("Registration.html/", views.Registration, name='Registration'),
]
