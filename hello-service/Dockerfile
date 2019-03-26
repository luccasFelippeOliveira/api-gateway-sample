FROM node:alpine
ADD . /hello-service
WORKDIR /hello-service
RUN npm install
EXPOSE 80
ENV PORT=80
CMD [ "npm", "start" ]