from rest_framework import serializers

from categories.models import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

    def validate_name(self, value):
        if Category.objects.filter(name_iexact=value).exists():
            raise serializers.ValidationError(f'Category {value} already exists.')
        return value
