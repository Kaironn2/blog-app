from django.urls import include, path

urlpatterns = [
    path('v1/posts/', include('posts.api.v1.urls', namespace='v1'))
]
