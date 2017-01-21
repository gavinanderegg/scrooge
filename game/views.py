from django.http import HttpResponse, HttpResponseRedirect
from django.template import RequestContext
from django.shortcuts import render_to_response, get_object_or_404
from scrooge.game import models
from django.utils import simplejson


def home(request):
    return render_to_response('base.html', {}, context_instance=RequestContext(request))
    


def popup(request):
    return render_to_response('popup.html', {}, context_instance=RequestContext(request))
    


def vote(request):
    m = models.Vote(
        choice = request.POST['vote'],
        ip = request.META['REMOTE_ADDR'],
    )
    
    m.save()
    
    data = {
        'id': m.id
    }
    
    json = simplejson.dumps(data)
    
    return HttpResponse(json, mimetype='application/json')