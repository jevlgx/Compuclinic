from django.urls import path
from auth.views import MyObtainTokenPairView, RegisterView, get_current_user, get_loggedin_user, LoginAPIView
from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('login/', MyObtainTokenPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='auth_register'),

    path('g/<pk>/', get_current_user, name='auth_user'),
    path('log/', get_loggedin_user, name='auth_user'),
    path('signin/', LoginAPIView.as_view(), name='auth_user'),
]