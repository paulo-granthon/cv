#!/bin/sh
cd /home/ubuntu/cv/
git fetch
git pull

cd web
npm install
npm run build
cd ../api
npm install
cd ..

sudo docker-compose build
sudo docker-compose down
sudo docker-compose up -d

sudo systemctl restart nginx
sudo pm2 restart all
