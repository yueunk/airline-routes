FROM node:16.15.0
WORKDIR /app 
COPY package.json /app 
COPY yarn.lock /app
RUN yarn install 
COPY . /app 
CMD yarn start
EXPOSE 3000