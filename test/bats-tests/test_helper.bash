#!/usr/bin/env bash
# Test helpers for BATS tests

# IMAGE=autorest-azure-functions-typescript
IMAGE=ts-autorest-test 
PORT=8000
DOCKERFILE=test.Dockerfile

build_docker_image() {
    echo "Building test image..."
    docker build -q -f $DOCKERFILE -t $IMAGE . 1>&2
}

in_tmp_container() {
    docker run --privileged=true --rm $IMAGE "$@"
}

rm_container() {
    docker stop $1
    docker rm -f $1 &>/dev/null && \
        echo "Deleted test container." || true
}

mk_container() {
    rm_container && echo "Creating test container with commands: $@">&2 && \
        docker create --name=$1 $IMAGE "$@" 1>/dev/null
}

start_run_container() {
    docker run -p $PORT:80 --name $1 -dt $IMAGE  1>/dev/null
}

run_in_container() {
    docker exec $1 bash -c "$@"
}

autorest_in_container() {
    docker exec $1 bash -c "autorest --input-file:$2 --use:/home/autorest.azure-functions-typescript --output-folder:/home/site/wwwroot --no-namespace-folders:True --no-async && cd /home/site/wwwroot && npm install && npm run build"  1>/dev/null
    sleep 25  # post npm install && npm run build, functions takes some time to load the function. Add the sleep to make sure the function has been loaded.
}

ping_functions_endpoint () {
    curl -X $2 http://localhost:$PORT/api/$1 2>/dev/null
}

in_container() {
    set -e
    rm_container
    mk_container "$@"
    echo "Starting test container...">&2
    start_container
}

start_container() {
    docker start --attach $TEST_CONTAINER
}

container_diff() {
    docker diff $TEST_CONTAINER
}

container_read_file() { # reads the file at container path $1
    set -eo pipefail
    docker cp $TEST_CONTAINER:"$1" - | tar x --to-stdout
}

save_tmp_file(){ # saves $1 into a temporary file and returns its path
    fp="$(mktemp)"
    touch "$fp"
    cat <<< "$1" > "$fp"
    echo "$fp"
}
