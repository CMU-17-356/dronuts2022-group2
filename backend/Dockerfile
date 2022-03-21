FROM gcr.io/google-appengine/nodejs

# Create an application directory
RUN mkdir -p /app

RUN npm install -g typescript
RUN npm install -g ts-node

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY . /app

# Install node packages
RUN npm install

EXPOSE 8080

# run script to compile ts files
RUN tsc -p .

CMD ["ts-node", "src/index.ts"]