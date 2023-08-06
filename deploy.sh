#!/bin/sh     
sudo git fetch
sudo git pull origin main

cd web
npm install
npm run build
cd ../api
npm install
cd ..

sudo systemctl restart nginx
sudo pm2 restart all
