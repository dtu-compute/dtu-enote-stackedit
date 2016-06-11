FROM fedora:23

RUN dnf -y update
RUN dnf -y install nodejs npm git

# For hostname
RUN dnf -y install net-tools


#RUN git clone https://github.com/dtu-compute/stackedit && \
#    cd /stackedit && \
#    rm -rf .git && \
#    npm install

RUN mkdir /stackedit
COPY . /stackedit

WORKDIR /stackedit

RUN npm install

COPY cmd.sh /
CMD ["/cmd.sh"]

