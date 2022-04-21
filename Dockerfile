FROM i386/node
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "start"]
