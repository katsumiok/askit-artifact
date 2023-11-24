#!/bin/sh

scripts=`find . -name run.sh`
for script in $scripts
do
    echo $script
    dir=`dirname $script`
    echo $dir
    cd $dir
    sh ./run.sh
    cd -
done


