#!/usr/bin/bash

# db is the hostname of the couchdb host which is specified in docker-compose from linking containers
DB=db

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


echo create master admin user
#curl -X PUT http://$DB:5984/_config/admins/admin -d '"'admin'"'
curl  --insecure -X PUT https://$DB:6984/_config/admins/admin -d '"'admin'"'

echo create databases/documents
echo each course have their own
courses=( '02402' '01005' )

for i in "${courses[@]}"
do
  echo Create course admin user: $i

  echo curl  --insecure -X PUT https://admin:admin@$DB:6984/_config/admins/user$i -d '"'pass$i'"'
  curl  --insecure -X PUT https://admin:admin@$DB:6984/_config/admins/user$i -d '"'pass$i'"'

  echo Create course DB: $i

  curl --insecure -X PUT https://user$i:pass$i@$DB:6984/db$i

  echo Running couchdb setup on $i

  node couchdb/setup.js https://user$i:pass$i@$DB:6984/db$i

  if [ $? -eq 0 ]
  then
    echo "Successfully set up couchdb"
  else
    echo "Could set up couchdb" >&2
    exit
  fi

done

node server.js

