FROM node:18

WORKDIR /app

COPY . /app

RUN npm install

# Define the entry point for the container
CMD ["npm", "start"]