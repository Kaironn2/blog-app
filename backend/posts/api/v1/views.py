from rest_framework import viewsets

from posts.models import Post

from .serializers import PostSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().select_related('author', 'category')
    serializer_class = PostSerializer
    lookup_field = 'slug'

    def get_serializer_context(self):
        return {'request': self.request}
