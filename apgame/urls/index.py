from django.urls import path, include
from apgame.views.index import index

urlpatterns = [
        path('', index, name='index'),
        path('menu/', include('apame.urls.menu.index')),
        path('playground/', include('apgame.urls.playground.index')),
        path('settings/', include('apgame.urls.settings.index')),
        ]

