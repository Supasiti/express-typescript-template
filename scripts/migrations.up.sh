#! /bin/sh

# Replace USERNAME and PASSWORD with your local postgres credentials
USERNAME=admin
PASSWORD=verysecret

for file in ./migrations/up/*.up.sql;
do
    echo "Running migration: ${file}"
    PGPASSWORD=$PASSWORD psql -h localhost -U $USERNAME -d sampledb -f "${file}"
done
