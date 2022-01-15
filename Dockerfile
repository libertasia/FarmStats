FROM node:16.13-alpine
WORKDIR /frontend
COPY ./package.json /frontend/package.json
COPY ./public /frontend/public
COPY ./src /frontend/src
RUN npm install
EXPOSE 80
CMD [ "npm", "start" ]
