from accounts.models import Profile
from django.http import HttpResponse
from django.shortcuts import render , redirect
from django.contrib.auth.models import User
from django.contrib import messages
from .models import *
import uuid
from django.conf import settings
from django.core.mail import send_mail
from django.contrib.auth import authenticate,login
from .helpers import send_forget_password_mail

# Create your views here.

def home(request):
    return render(request,'home.html')

def login_attempt(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password =  request.POST.get('password')

        user_obj = User.objects.filter(username = username).first()
        if user_obj is None:
            messages.success(request,'user not found')
            return redirect('/login')

        profile_obj = Profile.objects.filter(user = user_obj).first()

        if not profile_obj.is_verified:
            messages.success(request,"not verified. Please check your mail.")
            return redirect('/login')

        user=authenticate(username=username ,password=password)    
        if user is None:
            messages.success(request,"wrong password")
            return redirect('/login')

        else:
            login(request,user)
            return redirect('/home')



    return render(request,'login.html')

def register_attempt(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        email =  request.POST.get('email')
        password =  request.POST.get('password')

        try:
            if User.objects.filter(username=username).first():
                messages.success(request,"Username is taken.")
                return redirect('/register')
                
            elif User.objects.filter(email=email).first():
                messages.success(request,"Email is taken.")
                return redirect('/register')
        
            else:
                user_obj = User(username = username , email = email)
                user_obj.set_password(password)
                user_obj.save()
                auth_token = str(uuid.uuid4())
                profile_obj = Profile.objects.create(user = user_obj ,auth_token = auth_token)
                profile_obj.save()
                send_mail_after_registration(email, auth_token)
                return redirect('/token')

        except Exception as e:
            print(e)


        



    return render(request,'register.html')

def success(request):
    return render(request,'success.html')

def token_send(request):
    return render(request,'token_send.html')

def verify(request,auth_token):
    try:
        profile_obj = Profile.objects.filter(auth_token = auth_token).first()
        if profile_obj:
            if profile_obj.is_verified:
                messages.success(request,'account already verified.')
                return redirect('/login')

            profile_obj.is_verified = True
            profile_obj.save()
            messages.success(request,'account verified.')
            return redirect('/login')
        else:
            return redirect('/error')
    except Exception as e:
        print(e)
        return redirect('/')


def send_mail_after_registration(email , token):
    subject = 'Your account needs to be verified'
    message = f'Hi paste the link to verify your account http://127.0.0.1:8000/verify/{token}'
    email_from = settings.EMAIL_HOST_USER
    recipient_list = [email]
    send_mail(subject,message,email_from,recipient_list)


def error_page(request):
    return render(request,'error.html')

import uuid
def ForgetPassword(request):
    try:
        if request.method =="POST":
            username = request.POST.get('username')
            print("success")

            if not User.objects.filter(username=username).first():
                print("user not found")
                messages.success(request,"No user found.")
                return redirect("/forget-password/")
            
            user_obj=User.objects.get(username=username)
            token=str(uuid.uuid4())
            profile_obj1=Prof2.objects.get(user=user_obj)
            profile_obj1.forget_password_token=token
            profile_obj1.save()
            send_forget_password_mail(user_obj.email,token)
            messages.success(request,"An email is sent")
            return redirect("/forget-password/")
    except Exception as e:
        print(e)

    return render(request,'forget-password.html')


def ChangePassword(request,token):
    context={}
    try:
        profile_obj1=Prof2.objects.filter(forget_password_token=token).first()
        context={'user_id':profile_obj1.user.id}

        if request.method=="POST":
            new_password=request.POST.get('new_password')
            confirm_password=request.POST.get('confirm_password')
            user_id=request.POST.get('user_id')

            if user_id is None:
                messages.success(request,'No user id found')
                return redirect(f'/change-password/{token}/')

            if new_password!=confirm_password:
                messages.success(request,'Password not same')
                return redirect(f'/change-password/{token}/')

            user_obj = User.objects.get(id=user_id)
            user_obj.set_password(new_password)
            user_obj.save()
            return redirect('/login/')

    except Exception as e:
        print(e)
     