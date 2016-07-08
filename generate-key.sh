#!/bin/sh

# See https://devcenter.heroku.com/articles/ssl-certificate-self for overview

ssl_dir='ssllocal'
mkdir -p $ssl_dir
openssl genrsa -des3 -passout pass:x -out $ssl_dir/server.pass.key 2048

# be sure to use *.lvh.me as the common name, allows us to hit admin.lvh.me, etc.
openssl rsa -passin pass:x -in $ssl_dir/server.pass.key -out $ssl_dir/server.key

rm $ssl_dir/server.pass.key
openssl req -new -key $ssl_dir/server.key -out $ssl_dir/server.csr
openssl x509 -req -days 365 -in $ssl_dir/server.csr -signkey $ssl_dir/server.key -out $ssl_dir/server.crt
