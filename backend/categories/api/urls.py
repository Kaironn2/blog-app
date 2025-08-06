from django.urls import include, path

urlpatterns = [
    path('v1/categories/', include('categories.api.v1.urls', namespace='v1'))
]
