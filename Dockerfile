FROM fedora:23

RUN dnf -y update
RUN dnf -y install nodejs npm git

# For hostname
RUN dnf -y install net-tools


RUN mkdir /stackedit
COPY . /stackedit

WORKDIR /stackedit

RUN npm install
RUN npm install -g bower
RUN bower install --allow-root

COPY cmd.sh /
CMD ["/cmd.sh"]

