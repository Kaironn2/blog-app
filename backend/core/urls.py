from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/authentication/', include('authentication.urls')),
    path('api/', include('categories.api.urls')),
    path('api/', include('posts.api.urls'))
]
