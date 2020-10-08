FROM node:10

ENV NODE_ENV=production
ENV PORT 4000

EXPOSE 4000

RUN apt-get update && apt-get upgrade -y

COPY ./client/dist/ ./client/dist/
COPY ./musketeer-api/node_modules ./build/node_modules
COPY ./build/server/lib ./build/server/lib

CMD [ "node", "./build/server/lib/index.js" ]