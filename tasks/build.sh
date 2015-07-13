#!/bin/sh

echo "Building..."

if [ ! -e dist ]
then
	mkdir dist
else
	rm -rf dist
fi

srcJS=('src/**/*.js')

for script in ${srcJS[@]}
do
	filename=$(echo $script | rev | cut -d '/' -f1 | rev)
	srcDir=${script%%$(echo $filename)}
	targetDir=${srcDir/src/dist}

	if [ ! -e ${targetDir} ]
	then
		mkdir -p ${targetDir}
	fi

	targetFile="$targetDir$filename"
	echo "$script -> $targetFile"
	babel $script > $targetFile
done