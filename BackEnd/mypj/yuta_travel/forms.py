from django import forms
from .models import SendMail


class SendMailAdd(forms.ModelForm):
    class Meta:
        model = SendMail
        fields = ['mail_send']
