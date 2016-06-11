#!/usr/bin/bash

export SE_HOSTNAME=`hostname`
echo hostname is `hostname`
echo $SE_EXTERNAL_ADDRESS
node server.js &

