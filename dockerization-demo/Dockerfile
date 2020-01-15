FROM node:alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run Build

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html 
