# Test docker file which is based on Functions image. 

FROM mcr.microsoft.com/azure-functions/node:3.0-node12
# FROM python:3.8-buster

RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get install -y gnupg wget unzip git curl ca-certificates dirmngr apt-transport-https \
                       lsb-release openssl apt-utils coreutils make gcc g++ grep make util-linux \
                       binutils findutils vim python3-venv python3-pip && \
    # curl -sL https://deb.nodesource.com/setup_12.x | bash -  && \
    # apt-get -y install nodejs && \
    npm install -g autorest && \
    npm install -g @azure-tools/extension 

RUN mkdir /home/autorest.azure-functions-typescript

COPY . /home/autorest.azure-functions-typescript

RUN mkdir -p /home/site/wwwroot && \
    cd /home/autorest.azure-functions-typescript && \
    npm install --unsafe-perm

# RUN cd /home/autorest.azure-functions-python && \
#     npm install --unsafe-perm && \
#     python install.py

# COPY . /home/site/wwwroot

# RUN 

# autorest --use:./autorest.azure-functions-typescript/ --input-file:./autorest.azure-functions-typescript/test/data/service-description-jsons/contoso-hr-swagger.json --output-folder:/home/site/wwwroot --no-namespace-folders:True

CMD [ "/azure-functions-host/Microsoft.Azure.WebJobs.Script.WebHost" ]
