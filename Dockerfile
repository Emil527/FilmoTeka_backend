FROM node:20

WORKDIR /app

COPY . /app

RUN npm install 
RUN npm install dotenv

RUN npm start

# Define the entry point for the container
CMD ["npm", "start","nodemon"]