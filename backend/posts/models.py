from django.contrib.auth.models import User  # noqa: I001
from django.db import models

from categories.models import Category


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, blank=True, related_name='posts'
    )
    title = models.CharField(max_length=255)
    content = models.TextField()
    excerpt = models.CharField(max_length=255)
    cover_image = models.ImageField(upload_to='posts/covers/%Y/%m/%d')
    slug = models.SlugField(unique=True, blank=True, null=True)
    published = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title
