#!/usr/bin/bash

while true; do
    if curl -sS website-db:5984 | /usr/bin/grep -q Welcome; then
        echo "Database up"
        break
    fi
    echo "Waiting for database to come up"
    sleep 5
done

# ignore self signed cert warning
export NODE_TLS_REJECT_UNAUTHORIZED=0

echo create databases/documents...
node config-dtu.js
rc=$?; if [[ $rc != 0 ]]; then exit $rc; fi

echo creating secret...
export SESSION_SECRET=$(od -vAn -N16 -tx < /dev/urandom | tr -d " ")

echo starting server...
node server.js
