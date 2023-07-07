#!/bin/sh

# Start the local webserver, available on port 8002
python3 -m http.server --cgi 8002 &

# If you have only Python 2, comment out the previous line and
# replace with:
# python -m SimpleHTTPServer 8000

echo "Running ES translation on port 8002, view at http://localhost:8002"

# Watch for changes to the build
node_modules/webpack/bin/webpack.js -w &

