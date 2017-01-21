from django.conf.urls.defaults import *

from django.conf import settings

from scrooge.game import *

urlpatterns = patterns('',
    (r'^favicon\.ico$', 'django.views.generic.simple.redirect_to', {'url': '/static/favicon.ico'}),
    (r'^$', 'scrooge.game.views.home'),
    (r'^popup/', 'scrooge.game.views.popup'),
    (r'^vote/', 'scrooge.game.views.vote'),
    (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
)
