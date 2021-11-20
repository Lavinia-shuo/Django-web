from django.urls import path, include
from apgame.views.index import index

urlpatterns = [
        path('', index, name='index'),
        path('menu/', include('apgame.urls.menu.index')),
        path('background/', include('apgame.urls.background.index')),
        path('settings/', include('apgame.urls.settings.index')),
        ]

