from django.shortcuts import render
from django.shortcuts import redirect
from .models import Post
from .forms import SendMailAdd


def login(request):
    posts =  Post.objects.all()
    return render(request, "yuta_travel/login.html", {"posts": posts})

def Registration(request):
    if (request.method == 'POST'):
        form = SendMailAdd(request.POST)
        if form.is_valid():
            form.save()
            return render(request,'yuta_travel/login.html')
    modelform_dict = {
        'form': SendMailAdd()
    }
    return render(request, "yuta_travel/Registration.html", modelform_dict)

def registration(request):
    return render(request, "yuta_travel/Registration.html")

