# site_fr.wsgi
import os, sys, django.core.handlers.wsgi
sys.path.append(os.path.dirname(os.path.abspath(__file__) + '/..'))
sys.path.append('/www/scrooge')
sys.path.append('/www')
os.environ['DJANGO_SETTINGS_MODULE'] = 'settings'

os.environ['DEPLOY_SERVER'] = 'remote'

application = django.core.handlers.wsgi.WSGIHandler()