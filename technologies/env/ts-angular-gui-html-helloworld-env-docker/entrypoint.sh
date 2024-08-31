#!/bin/sh

# Replace placeholder in config.json with environment variables
sed -i "s|\"message\": \".*\"|\"message\": \"$MESSAGE\"|" /usr/share/nginx/html/assets/config.template.json
envsubst < /usr/share/nginx/html/assets/config.template.json > /usr/share/nginx/html/assets/config.json

# Start nginx
exec "$@"