#!/bin/bash

# Build and push Docker images
docker-compose build
docker-compose push

# Deploy to production server
ssh user@production-server << 'ENDSSH'
cd /opt/wastemanagement
git pull
docker-compose pull
docker-compose up -d
ENDSSH 