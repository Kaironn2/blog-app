import json
from typing import Dict, List, TypedDict

import requests
from decouple import config
from django.conf import settings
from django.core.management.base import BaseCommand
from rest_framework import status


class PostData(TypedDict):
    title: str
    category: str
    content: str
    excerpt: str
    cover_image: str


class CategoryData(TypedDict):
    id: str
    name: str


class TokenPairData(TypedDict):
    refresh: str
    access: str


class HeadersData(TypedDict):
    Authorization: str


class Command(BaseCommand):
    help = 'Create posts using API from json file for tests and developing'

    json_file_path = settings.ASSETS_DATA_DIR / 'posts.json'
    api_url = config('API_URL')
    base_url = f'{config("API_URL")}/api/v1'
    categories_endpoint = f'{base_url}/categories/'
    posts_endpoint = f'{base_url}/posts/'
    authentication_endpoint = f'{api_url}/api/authentication/token/'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.headers = self.get_headers()
        self.categories = self.get_categories()

    def handle(self, *args, **kwargs):
        posts = self.load_posts_from_json()
        self.create_posts(posts)

    def load_posts_from_json(self) -> List[PostData]:
        with open(self.json_file_path, encoding='utf-8') as file:
            return json.load(file)

    def get_headers(self) -> HeadersData:
        payload = {'username': config('API_USERNAME'), 'password': config('API_PASSWORD')}
        response = requests.post(self.authentication_endpoint, json=payload)
        token: TokenPairData = response.json()

        return {'Authorization': f'Bearer {token["access"]}'}

    def get_categories(self) -> Dict[str, str]:
        response = requests.get(self.categories_endpoint)
        return {category['name']: category['id'] for category in response.json()}

    def get_or_create_category(self, category_name: str) -> CategoryData:
        category_id = self.categories.get(category_name)
        if category_id:
            return {'name': category_name, 'id': category_id}

        payload = {'name': category_name}
        response = requests.post(self.categories_endpoint, json=payload, headers=self.headers)
        category: CategoryData = response.json()
        self.categories[category['name']] = category['id']
        return category

    def create_posts(self, posts: List[PostData]):
        created = 0
        for post in posts:
            image_path = settings.ASSETS_IMGS_DIR / post.pop('cover_image')
            post['category_id'] = self.get_or_create_category(post['category'])['id']

            with open(image_path, 'rb') as img:
                files = {'cover_image': img}
                response = requests.post(
                    self.posts_endpoint, data=post, files=files, headers=self.headers
                )

            if response.status_code == status.HTTP_201_CREATED:
                created += 1
                self.stdout.write(self.style.SUCCESS(f'Post created: {post["title"]}'))
            else:
                try:
                    error_detail = response.json()
                except Exception:
                    error_detail = response.text
                self.stdout.write(
                    self.style.ERROR(
                        f'Error on create {post["title"]:} {response.status_code} {error_detail}'
                    )
                )

        self.stdout.write(self.style.SUCCESS(f'\n{created}/{len(posts)} successful created'))
