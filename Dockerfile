FROM node:16-alpine3.12

RUN mkdir /directory

COPY ./src /directory/src

COPY ./package.json /directory
COPY ./tsconfig.json /directory


WORKDIR /directory

RUN yarn install

ENTRYPOINT ["yarn", "start"]