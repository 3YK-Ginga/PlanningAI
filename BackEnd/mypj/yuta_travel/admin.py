from django.contrib import admin

from .models import Post
from .forms import SendMail


admin.site.register(Post)
admin.site.register(SendMail)
