import os

from fabric.api import local, settings, abort, run, cd, env, put, runs_once, lcd, local, task
from fabric.contrib.console import confirm

import time

timestamp="release-%s" % int(time.time() * 1000)

env.user = 'django'
env.hosts = ['162.243.253.184']
deploy_dir = 'deploy'

@task
def deploy():
    code_dir = '/home/django/apps/games/stone-harbor'
    deploy_app(code_dir)
#    register_deployment('.')

@task
def deploy_qa():
    code_dir = '/home/django/apps/games/staging/stone-harbor'
    deploy_app(code_dir)
    register_deployment('.')

def deploy_app(code_dir):

    local('NODE_ENV=production webpack')
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


@task
@runs_once
def register_deployment(git_path):
    with(lcd(git_path)):
        revision = local('git log -n 1 --pretty="format:%H"', capture=True)
        branch = local('git rev-parse --abbrev-ref HEAD', capture=True)
        local('curl https://intake.opbeat.com/api/v1/organizations/20455e2f554647e7a3e723eacca96171/apps/b62baee357/releases/'
              ' -H "Authorization: Bearer 4d48bec505b4ea6f6a5f1b44c5b15b9940e0c205"'
              ' -d rev="{}"'
              ' -d branch="{}"'
              ' -d status=completed'.format(revision, branch))
