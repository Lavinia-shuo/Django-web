from django.urls import path
from apgame.views import index

urlpatterns = [
        path("", index, name = "index"),
]
