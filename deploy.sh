#!/bin/sh
git fetch
git pull

sudo echo "hello" > ./hello

cd web
npm install
npm run build
cd ../api
npm install
cd ..

sudo docker-compose up --build -d

sudo systemctl restart nginx
sudo pm2 restart all
