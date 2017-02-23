FROM fedora:23

RUN dnf -y update
RUN dnf -y install nodejs npm git

RUN dnf search make

# For runsync
RUN dnf -y install make
RUN dnf -y install gcc
RUN dnf -y install gcc-c++
RUN dnf -y install python

# For hostname
RUN dnf -y install net-tools

RUN mkdir /stackedit
WORKDIR /stackedit

COPY ./package.json /stackedit

#UN npm install -g node-gyp
#RUN npm install -g runsync
RUN npm install

COPY ./bower.json /stackedit
COPY ./.bowerrc /stackedit

RUN npm install -g bower
RUN bower install --allow-root

COPY . /stackedit

RUN npm install -g gulp
RUN gulp default

CMD ["./cmd.sh"]

