# NOSQL Playground with Docker

NOSQL Playground is a collection of docker containers of some commonly used NoSQL Databases. All the containers are preconfigured with some collections. 


First pull the repository and run the below command to complete the installation:
!! Be sure that you copy the `.env.example` file to`.env` and change based on your local configuration !!
```
chmod +x ./play && ./play start
```
## MongoDB
MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

We also have a Web-based MongoDB admin interface written with Node.js, Express and Bootstrap3 out of the box. This web application can be access throuth the url: [http://localhost:8081/](http://mongo:mongo@localhost:8081/).

MongoDB Cheat Sheet:
```console
# Show Databases
show dbs

# Prints the current database
db

# Switch Database
use <database_name>

# Show Collections
show collections

#
```

We also have a helpful bash script for your daily use.

```
# To start all container
./play start

# To restart all container
./play restart

# To stop all container
./play stop

# To SSH into a server and open mongodb shell
./play mongodb

# To SSH into a server and open cassandra shell
./play cassandra
```





