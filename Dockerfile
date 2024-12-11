# Use the official Node.js image as the base
FROM node:20-alpine AS base

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Use a minimal runtime image
FROM node:20-alpine AS runtime

# Set the working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=base /app ./

# Expose the application's port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
