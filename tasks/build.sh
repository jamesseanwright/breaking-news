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
	srcJS=(src/{,components/}*.$1)

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
		babel $script > $targetFile
		echo "$script -> $targetFile"
	done
}

toClientES5()
{

	srcDir=src/public/
	targetDir=dist/public/
	filename=main.js

	if [ ! -e $targetDir ]
	then
		mkdir $targetDir
	fi


	echo "$srcDir$filename -> $targetDir$filename"
	browserify "$srcDir$filename" -t babelify --outfile "$targetDir$filename"
	
}

toES5 js
toES5 jsx
toClientES5