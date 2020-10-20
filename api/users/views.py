from rest_framework import viewsets, exceptions, permissions
from .models import User
from users import serializers


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def is_myself(self):
        pk = self.kwargs['pk'] if 'pk' in self.kwargs else ''
        return self.request and self.request.user and (
            pk == 'me' or pk == str(self.request.user.id))

    def get_object(self):
        if self.is_myself():
            return self.request.user
        else:
            raise exceptions.NotFound()
