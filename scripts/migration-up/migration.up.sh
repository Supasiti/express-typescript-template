#! /bin/sh

# Replace USERNAME and PASSWORD with your local postgres credentials
USERNAME=isptuser
PASSWORD=verysecret

for file in ./migration/*.up.sql;
do
    echo "Running migration: ${file}"
    PGPASSWORD=$PASSWORD psql -h localhost -U $USERNAME -d esgreport -f "${file}"
done