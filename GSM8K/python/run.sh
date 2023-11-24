#!/bin/sh

export ASKIT_MODEL=gpt-4
until python run.py; do
    echo "Process crashed with exit code $?.  Respawning.." >&2
    sleep 1
done

