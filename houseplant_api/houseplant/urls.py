"""
URL configuration for houseplant project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include, re_path
from rest_framework import permissions, routers
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

from plant_manage.urls import router as plant_router

# Configuration du Swagger
schema_view = get_schema_view(
    openapi.Info(
        title="House Plant API",
        default_version='v1',
        description="This API is a backend API for the houseplant management system",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=False,
    permission_classes=[permissions.AllowAny],
)

router = routers.DefaultRouter()
router.registry.extend(plant_router.registry)


urlpatterns = [
    path('admin/', admin.site.urls),
    # Route de gestion des utilisateurs et leurs sessions
    path('api/', include('dj_rest_auth.urls')),
    path('api/registration/',
         include('dj_rest_auth.registration.urls')),

    # Route pour l'administration des plante
    path('api/', include(router.urls)),

    # Route pour le swagger
    re_path(r'^swagger(?P<format>\.json|\.yaml)$',
            schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger',
            cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc',
            cache_timeout=0), name='schema-redoc'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
