from django.urls import path
from apgame.views.settings.getinfo import getinfo
from apgame.views.settings.login import signin
from apgame.views.settings.logout import signout
from apgame.views.settings.register import register


urlpatterns = [
    path("getinfo/", getinfo, name="settings_getinfo"),
    path("login/", signin, name="settings_login"),
    path("logout/", signout, name="settings_logout"),
    path("register/", register, name="settings_register"),
]

