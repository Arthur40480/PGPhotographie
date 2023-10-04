# Creating multi-stage build for production
FROM node:18-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1

WORKDIR /opt/
COPY package.json yarn.lock ./
RUN yarn config set network-timeout 600000 -g && yarn install
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
COPY .env.prod .env
COPY vite.config.prod.js ./vite.config.js
RUN yarn build

FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/
COPY --from=build /opt/app/dist /usr/share/nginx/html
EXPOSE 80 
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
