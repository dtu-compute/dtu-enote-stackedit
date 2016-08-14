FROM fedora:23

RUN dnf -y update
RUN dnf -y install nodejs npm git

RUN dnf search make

# For runsync
RUN dnf -y install make
RUN dnf -y install gcc

# For hostname
RUN dnf -y install net-tools


RUN mkdir /stackedit
COPY . /stackedit

WORKDIR /stackedit

#RUN rm -rf node_modules

RUN npm install
RUN npm install -g node-gyp
RUN npm install -g runsync

RUN npm install -g bower
RUN bower install --allow-root

CMD ["./cmd.sh"]

