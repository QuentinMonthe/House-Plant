FROM node:18.17.0 AS build

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install --silent

# Add app
COPY . .

# Start app
CMD [ "npm", "start" ]