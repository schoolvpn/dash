# Build & Compile the frontend in Node.js
FROM tiangolo/node-frontend:10 as build-stage
WORKDIR /app
COPY app/package*.json /app/
RUN npm install
COPY ./app /app/
RUN npm run build

# Copy built frontend into Nginx image
FROM nginx:1.15
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Default Nginx config for node
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf