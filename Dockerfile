
# Base image
FROM node:14

# Set working directory
WORKDIR NODEPROJECT

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code to the container
COPY . .

# Set environment variables
ENV PORT=8000

# Expose port
EXPOSE 8000

# Start the application
CMD ["npm", "run", "dev"]
