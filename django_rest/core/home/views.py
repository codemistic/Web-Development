from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token


# Create your views here.
@api_view(['GET'])
def get_book(request):
    book_objs = Book.objects.all()
    serializer = BookSerializer(book_objs , many=True)
    return Response({'status':200,'payload':serializer.data})


from rest_framework_simplejwt.tokens import RefreshToken 


class RegisterUser(APIView):
    def post(self,request):
        serializer = UserSerializer(data = request.data)
        
        if not serializer.is_valid():
            return Response({'status':403,'message':'something went wrong'})

        serializer.save()

        user = User.objects.get(username = serializer.data['username'])
        # token_obj , _ = Token.objects.get_or_create(user = user)
        refresh = RefreshToken.for_user(user)

        return Response({'status':200,'payload':serializer.data,'refresh':str(refresh),'access':str(refresh.access_token),'message':'you sent'})


from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class StudentAPI(APIView):

    # authentication_classes = [TokenAuthentication]
    authentication_classes = [JWTAuthentication]
    permission_classes =[IsAuthenticated]

    def get(self,request):
        student_objs = Student.objects.all()
        serializer = StudentSerializer(student_objs,many=True)
        return Response({'status':200,'payload':serializer.data})

    def post(self,request):
        
        serializer = StudentSerializer(data = request.data)
    
        if not serializer.is_valid():
            return Response({'status':403,'message':'something went wrong'})

        serializer.save()
        return Response({'status':200,'payload':serializer.data,'message':'you sent'})


    def put(self,request):
        try:
            student_obj = Student.objects.get(id=request.data['id'])

            serializer = StudentSerializer(student_obj,data = request.data)
            if not serializer.is_valid():
                return Response({'status':403,'errors': serializer.errors,'message':'something went wrong'})

            serializer.save()

            return Response({'status':200,'payload':serializer.data,'message':'you data is updated'})

        except Exception as e:
            return Response({'status':403,'message':'invalid_id'})



    def patch(self,request):
        try:
            student_obj = Student.objects.get(id=request.data['id'])

            serializer = StudentSerializer(student_obj,data = request.data,partial=True)
            if not serializer.is_valid():
                return Response({'status':403,'errors': serializer.errors,'message':'something went wrong'})

            serializer.save()

            return Response({'status':200,'payload':serializer.data,'message':'you data is updated'})

        except Exception as e:
            return Response({'status':403,'message':'invalid_id'})

    
    
    def delete(self,request):
        try:
            id = request.GET.get('id')
            student_obj = Student.objects.get(id=id)
            student_obj.delete()
            return Response({'status':200,'message':'deleted'})

        except Exception as e:
            print(e)
            return Response({'status':403,'message':'invalid id'})




from rest_framework import generics

class StudentGeneric(generics.ListAPIView , generics.CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentGeneric1(generics.UpdateAPIView , generics.DestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field ='id'















# @api_view(['GET'])
# def home(request):
#     student_objs = Student.objects.all()
#     serializer = StudentSerializer(student_objs,many=True)


#     return Response({'status':200,'payload':serializer.data})

# @api_view(['POST'])
# def post_student(request):
#     data = request.data
#     serializer = StudentSerializer(data = request.data)
    
#     if request.data['age'] < 18:
#         return Response({'status':403,'message':'age < 18'})


#     if not serializer.is_valid():
#         return Response({'status':403,'message':'something went wrong'})

#     serializer.save()

#     return Response({'status':200,'payload':data,'message':'you sent'})

# @api_view(['PUT'])
# def update_student(request,id):
#     try:
#         student_obj = Student.objects.get(id=id)

#         serializer = StudentSerializer(student_obj,data = request.data)
#         if not serializer.is_valid():
#             return Response({'status':403,'errors': serializer.errors,'message':'something went wrong'})

#         serializer.save()

#         return Response({'status':200,'payload':serializer.data,'message':'you sent'})

#     except Exception as e:
#         return Response({'status':403,'message':'invalid_id'})
    

# @api_view(['DELETE'])
# def delete_student(request,id):
#     try:
#         student_obj = Student.objects.get(id=id)
#         student_obj.delete()
#         return Response({'status':200,'message':'deleted'})

#     except Exception as e:
#         print(e)
#         return Response({'status':403,'message':'invalid id'})