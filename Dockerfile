# Use Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install

# Copy all other files
COPY . .

# Expose the service port
EXPOSE 6002

# Run the service
CMD ["npx", "nodemon", "src/index.js"]
