# Step 1: Build the Angular application
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Step 2: Serve the application with a simple server
FROM nginx:alpine

COPY --from=build /app/dist/ts-angular-gui-html-helloworld-env-docker/browser /usr/share/nginx/html

# Copy the custom entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Run the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]

# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
