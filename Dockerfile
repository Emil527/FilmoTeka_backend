FROM node:20

WORKDIR /app

COPY . /app

RUN npm install -g npm@9.7.1

RUN npm start

# Define the entry point for the container
CMD ["npm", "start","nodemon"]