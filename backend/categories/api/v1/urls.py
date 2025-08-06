from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import CategoryViewSet

app_name = 'v1'

router = DefaultRouter()
router.register(r'', CategoryViewSet, basename='category')

urlpatterns = [
    path('', include(router.urls))
]
