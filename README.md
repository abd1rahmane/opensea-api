# Unofficial Opensea API V1

> Tested in Ubuntu 20.04/22.04

<br>

<h2>🌴 API Documentation</h2>

To view the list of available APIs and their specifications, run the server and go to http://localhost:8080/v1/docs in your browser. This documentation page is automatically generated using the swagger definitions written as comments in the route files.

### API Endpoints

#### List of available **_routes_**:

-  `GET /v1/collections` : get collection's data.
   -  Example :
      `v1/collections/cryptopunks?page=2`
-   NB : pagiantion starts from `0`.
<br>

<h2>🧐 Features</h2>

Here're some of the project's best features:

-  Ultra fast : very low latency !
-  Flexible : The same full data as the Opensea GraphQL.
   <br>

<h2>💻 Built with</h2>

Technologies used in the project:

-  NodeJS .
-  Go based http client.

## Installation

Use the package manager npm

```bash
cd opensea
npm install
```

## Usage

-  You can run it on any linux server :

### 1) Development

```bash
cd opensea
node app.js
curl "http://localhost:8080/v1/collections/cryptopunks?page=2"

```

`http://localhost:8080/v1/docs`

### 2) Production

```bash
cd opensea
NODE_ENV=production node app.js
curl "http://<server-ip>:8080/v1/collections/cryptopunks?page=2"

```

`http://<server-ip>:8080/v1/docs`

---

> This repository is for research purposes only, the use of this code is your responsibility.

Built with love and coffee.
