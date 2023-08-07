#!/bin/sh
cd /home/ubuntu/cv/
git config core.sshCommand 'ssh -i /home/ubuntu/.ssh/id_rsa' && git fetch && git pull

cd web
npm install
npm run build
cd ../api
npm install
cd ..

sudo docker-compose up --build -d

sudo systemctl restart nginx
sudo pm2 restart all
