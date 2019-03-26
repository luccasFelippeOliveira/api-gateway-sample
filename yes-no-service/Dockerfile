FROM node:alpine
ADD . /yes-no-service
WORKDIR /yes-no-service
RUN npm install
EXPOSE 80
ENV PORT=80
CMD [ "npm", "start" ]