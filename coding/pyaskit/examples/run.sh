#!/bin/sh

export ASKIT_MODEL=gpt-3.5-turbo-16k
until python top50.py; do
    echo "Process crashed with exit code $?.  Respawning.." >&2
    sleep 1
done
