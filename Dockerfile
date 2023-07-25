# Use the official Node.js LTS image as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies using npm
RUN npm install

# Copy all the files from your project to the container
COPY . .

# Build your project
RUN npm run build

# Expose the port your application runs on
EXPOSE 3000

# Define the command to start your application
CMD ["npm", "start"]

