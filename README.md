# docker-hapi-sample

This is a small example of a hapi server serving swagger documentation.

This illustrates an issue where docker port mappings disallows use of the swagger documentation routes.

For this example the server is running on port `9000` in the container, which is mapped to port `9001` on the host.

In order to start the server in a container, first ensure that [docker](https://docs.docker.com/engine/installation/) is installed and running on your machine.
 
Next, use the provided `scripts/start.sh` to build and run the container. If you do not feel comfortable running the script, I have provided the individual commands below

 - (From '.../docker-hapi-sample'): `$ docker build -t docker-hapi-sample .`
 - `$ docker run -d -p 9001:9000 docker-hapi-sample`
 
You may now view the swagger documentation by visiting `hostname:9001/docs` in your browser of choice

You will notice that the routes do not return any content as the request is sent to `hostname:9000`.

To view a working version of the docs, replace the docker run command with `$ docker run -d -p 9000:9000 docker-hapi-sample` and visit `hostname:9000/docs`.
