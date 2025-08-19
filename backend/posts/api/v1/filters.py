import django_filters

from posts.models import Post


class PostFilter(django_filters.FilterSet):
    published = django_filters.BooleanFilter()
    category = django_filters.CharFilter(field_name='category__name', lookup_expr='iexact')
    author = django_filters.NumberFilter(field_name='author__id', lookup_expr='exact')
    title = django_filters.CharFilter(field_name='title', lookup_expr='icontains')
    created_after = django_filters.DateFilter(field_name='created_at', lookup_expr='gte')
    created_before = django_filters.DateFilter(field_name='created_at', lookup_expr='lte')

    class Meta:
        model = Post
        fields = ['published', 'category', 'author', 'title', 'created_after', 'created_before']
