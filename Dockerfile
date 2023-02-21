FROM node:16

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

COPY . .

ARG PUBLIC_ENV
ENV PUBLIC_ENV "${PUBLIC_ENV}"

ENV NODE_ENV "production"

# Installing dependencies
RUN yarn install

# Running the app
EXPOSE 5000
CMD [ "yarn", "start" ]