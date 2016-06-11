#!/usr/bin/bash


export SE_HOSTNAME=`hostname`
echo hostname is `hostname`
echo $SE_EXTERNAL_ADDRESS

# db is the hostname of the couchdb host which is specified in docker-compose from linking containers
DB=db


while true; do
    if curl -k https://$DB:6984 | /usr/bin/grep -q Welcome; then
        echo "Database up"
        break
    fi
    echo "Waiting for database to come up"
    sleep 5
done

# ignore self signed cert warning
#export NODE_TLS_REJECT_UNAUTHORIZED=0
node couchdb/setup.js https://$DB:6984/documents

# create master admin user
curl -X PUT http://$DB:5984/_config/admins/admin -d '"'admin'"'

# create admin users
curl -X PUT http://admin:admin@$DB:5984/_config/admins/user02402 -d '"'pass02402'"'
curl -X PUT http://admin:admin@$DB:5984/_config/admins/user01005 -d '"'pass01005'"'

# create databases/documents
# each course have their own
curl -X PUT http://user02402:pass02402@$DB:5984/db02402
curl -X PUT http://user01005:pass01005@$DB:5984/db01005


node server.js

