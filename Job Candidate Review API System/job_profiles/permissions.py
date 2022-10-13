from rest_framework import permissions

class UpdateOwnProfile(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.id == request.user.id

class UpdateOwnApplication(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.job_profile.id == request.user.id or request.user.is_staff

class AdminAuthenticationPermission(permissions.BasePermission):

    def has_object_permission(self, request, view):
        user = request.user
        if user and user.is_authenticated():
            return user.is_superuser
        return False