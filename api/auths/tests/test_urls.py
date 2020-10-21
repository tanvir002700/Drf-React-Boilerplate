from django.test import SimpleTestCase
from django.urls import reverse, resolve
from djoser import views


class TestUrls(SimpleTestCase):
    def test_login_url_is_resolved(self):
        url = reverse('djoser-auths:login')
        self.assertEqual(resolve(url).func.view_class, views.TokenCreateView)

    def test_logout_url_is_resolved(self):
        url = reverse('djoser-auths:logout')
        self.assertEqual(resolve(url).func.view_class, views.TokenDestroyView)
