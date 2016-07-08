#!/bin/sh

/usr/local/bin/http-server --ssl --key=ssllocal/server.key --cert=ssllocal/server.crt &
sass --watch scss:css &
webpack -w &
