FROM node

MAINTAINER Jover Zhang <joverzh@gmail.com>

ENV NPM_REGISTRY=https://registry.npm.taobao.org \
    FRONT_REPO=https://gitee.com/JoverSite/web-front

COPY ./ /www

RUN cd /www && \
    yarn install --registry $NPM_REGISTRY && \
    rm -rf src/public/static && \
    git clone -b package $FRONT_REPO src/public/static

WORKDIR /www

ENTRYPOINT ["yarn", "run", "start"]
CMD ["--port", "8080"]
