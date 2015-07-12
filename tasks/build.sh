#!/bin/sh

echo "Building..."

if [ ! -e dist/server.js ]
then
	touch dist/server.js
fi


babel src/server.js --modules common > dist/server.js