#!/bin/sh

echo "Building..."

shopt -s nullglob

if [ ! -e dist ]
then
	mkdir dist
else
	rm -rf dist
fi

toES5()
{
	# $1 - file extesion

	srcJS=(src/{,**/}*.$1)

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
}

toES5 js
toES5 jsx