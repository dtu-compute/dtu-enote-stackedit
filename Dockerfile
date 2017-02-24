FROM fedora:25

RUN dnf -y update
RUN dnf -y install nodejs npm git

# For hostname
RUN dnf -y install net-tools

RUN node -v
RUN npm -v

RUN mkdir /stackedit
WORKDIR /stackedit

COPY ./package.json /stackedit

RUN npm install -g node-gyp
RUN npm install

COPY ./bower.json /stackedit
COPY ./.bowerrc /stackedit

RUN npm install -g bower
RUN bower install --allow-root

COPY . /stackedit

RUN npm install --save-dev bower
RUN npm install -g gulp
RUN gulp default

CMD ["./cmd.sh"]

