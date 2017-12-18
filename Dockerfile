FROM node:alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN yarn

EXPOSE 3000
ENV NODE_ENV production

COPY . .
RUN yarn webpack

CMD ["node", "./bin/www"]
