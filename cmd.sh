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


#echo create master admin user
# handled in local.ini of couchdb so there's never an admin party
#curl  --insecure -X PUT https://$DB:6984/_config/admins/dtuadmin -d '"'Aevee7Le'"'

echo create databases/documents...
node config-dtu.js

echo starting server...
node server.js

