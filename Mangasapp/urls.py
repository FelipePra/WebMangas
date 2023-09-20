from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from Mangasapp import views

router = routers.DefaultRouter()
router.register(r'mangas', views.MangaView,'mangas')

urlpatterns = [
    path('api/v1/',include(router.urls)),
    path('docs/',include_docs_urls("Mangas API"))
]