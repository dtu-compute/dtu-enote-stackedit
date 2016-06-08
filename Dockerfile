FROM fedora:23

RUN dnf -y update
RUN dnf -y install nodejs npm git

RUN git clone https://github.com/dtu-compute/stackedit && \
    cd /stackedit && \
    rm -rf .git && \
    npm install

WORKDIR /stackedit

COPY cmd.sh /
CMD ["/cmd.sh"]

