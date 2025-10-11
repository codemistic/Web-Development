from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse
from . models import Employee, Role, Department
from datetime import datetime
from django.db.models import Q
# Create your views here.
def index(request):
    return render(request,'index.html')

def all_emp(request):
    emps=Employee.objects.all()
    context={
        'emps':emps
    }
    return render(request,'view_all_emp.html',context)

def add_emp(request):
   if request.method=="POST":
       first_name=(request.POST['first_name'])
       last_name=(request.POST['last_name'])
       salary=(request.POST['salary'])
       bonus=(request.POST['bonus'])
       phone=(request.POST['phone'])
       dept=(request.POST['dept'])
       role=(request.POST['role'])
    #    location=(request.POST['location'])
       
       new_emp=Employee(first_name=first_name,last_name=last_name,salary=salary,bonus=bonus,phone=phone,dept_id=dept,role_id=role,hire_date=datetime.now())
       new_emp.save()
       return HttpResponse("your response has been saved successfully")
   elif request.method =='GET':
       return render(request,'add_emp.html')
   else:
       return HttpResponse("error detacted !")

def remove_emp(request,emp_id=0):
    if emp_id:
        try:
            emp_removed=Employee.objects.get(id=emp_id)
            emp_removed.delete()
            return HttpResponse("employee removed successfully")
        except:
            return HttpResponse("please enter valid id")
    emps=Employee.objects.all()
    context={
        'emps':emps
    }
    return render(request,'remove_emp.html',context)


def filter_emp(request):
    if request.method=='POST':
        # name= request.POST.get('name')
        dept=request.POST.get('dept')
        role=request.POST.get('role')
        emps=Employee.objects.all()
        #if name:
         #   emps=emps.filter(Q(first_name__icontains=name)) | (Q(last_name__icontains=name))
        if dept:
            emps=emps.filter(dept__name=dept)
        if role:
            emps=emps.filter(role__name=role)
        
        context={
            'emps':emps
        }
        return render(request,'view_all_emp.html',context)
     
    elif request.method=='GET':
        return render(request,'filter_emp.html')
    else:
        return HttpResponse("an exception occured")
    return render(request,'filter_emp.html')