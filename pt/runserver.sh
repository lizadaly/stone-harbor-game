#!/bin/sh

# Start the local webserver from the repo root (the translation shares ../css), available on port 8001
python3 -m http.server --cgi 8001 --directory .. &

# If you have only Python 2, comment out the previous line and
# replace with:
# python -m SimpleHTTPServer 8000

echo "Running PT translation on port 8001, view at http://localhost:8001/pt/"

# Watch for changes to the build
node_modules/webpack/bin/webpack.js -w &

