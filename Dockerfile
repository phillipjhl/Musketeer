FROM node:12-alpine as builder

## Install build toolchain, install node deps and compile native add-ons
RUN apk add --no-cache python make g++

COPY package*.json ./

RUN npm ci --only=production

FROM node:12-alpine as app
RUN apk add --no-cache tini
USER node
WORKDIR /usr/src/musketeer
## Copy built node modules and binaries without including the toolchain
COPY --from=builder node_modules node_modules

ENV NODE_ENV=production
ENV PORT 8080

COPY --chown=node:node ./build/ ./build/

EXPOSE 8080 3001

CMD [ "/sbin/tini", "--", "node", "./build/musketeer-api/index.js" ]