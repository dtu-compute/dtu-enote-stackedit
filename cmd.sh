#!/usr/bin/bash


# db is the hostname of the couchdb host which is specified in docker-compose from linking containers
DB=couchdb

while true; do
    if curl  --insecure -k https://$DB:6984 | /usr/bin/grep -q Welcome; then
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

echo creating secret...
export SESSION_SECRET=$(od -vAn -N16 -tx < /dev/urandom | tr -d " ")

echo starting server...
node server.js

