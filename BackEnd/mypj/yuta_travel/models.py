from django.db import models

class Post(models.Model):
    user_name = models.CharField(max_length=255)
    login_pw = models.CharField(max_length=255)
    login_pw_check = models.CharField(max_length=255)


class SendMail(models.Model):
    mail_send = models.EmailField(max_length=255)

