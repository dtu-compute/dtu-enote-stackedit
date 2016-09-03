#!/bin/sh

NODE_TLS_REJECT_UNAUTHORIZED=0 node couchdb_transfer.js export $*

