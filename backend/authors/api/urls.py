from django.urls import include, path

urlpatterns = [
    path('v1/authors/', include('authors.api.v1.urls', namespace='v1'))
]
