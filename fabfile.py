import os

from fabric.api import local, settings, abort, run, cd, env, put
from fabric.contrib.console import confirm

import time

timestamp="release-%s" % int(time.time() * 1000)

env.user = 'django'
env.hosts = ['162.243.253.184']
deploy_dir = 'deploy'

code_dir = '/home/django/apps/games/stone-harbor'

def deploy():
    deploy_app()

def deploy_app():

    filename = 'deploy-{}.tgz'.format(timestamp)
    filepath = os.path.join(deploy_dir, filename)

    local('find . -name "*.DS_Store" -exec rm \'{}\' \;')
    local('find . -name "*~" -exec rm \'{}\' \;')
    local('find . -name "*.pyc" -exec rm \'{}\' \;')
    local('rm -rf {}/*'.format(deploy_dir))

    local('tar --exclude="./corp/local.py" -czf {} index.html images/ build/ css/ '.format(filepath))
    put(filepath, code_dir)
    run('cd {} && tar xvfz {}'.format(code_dir,
                                      code_dir + '/' + filename))
    run('cd {} && rm {}'.format(code_dir,
                                code_dir + '/' + filename))
