https://dev.to/tsflorus/build-a-website-with-gatsby-and-strapi-part-1-12-steps-to-install-and-deploy-strapi-43m9

Pre-requisites:

- [ ] Node.js - 12.x (tested with 12.14.0)

  ```shell
  nvm i 12.14.0
  nvm use 12.14.0
  ```

- [ ] npm - 6.x

- create an nvmrc file to ensure that the version stays locked.

```
# .nvmrc

12.14.0
```

```shell
# clone from base repo:
git clone .
```

```shell
# be sure to install dependencies
yarn
```

```shell
# add gatsby-source-strapi

yarn add gatsby-source-strapi
```

```shell
# start dev server:
yarn develop
```

setup gatsby-config:

```js
#gatsby-config.js

{
  resolve: "gatsby-source-strapi",
    options: {
      apiURL: process.env.GATSBY_STRAPI_API_URL || "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "block",
          "section",
          "page",
        ],
          // singleTypes: ["page"],
          queryLimit: 1000,
    },
  },
```

```xquery
query HomeQuery {
  allStrapiSection(filter: {pages: {elemMatch: {name: {eq: "home"}}}}) {
    edges {
      node {
        name
        block {
          block {
            content {
              content
            }
            text {
              text
              type
            }
          }
          name
        }
      }
    }
  }
}
```

- setup heroku account -- add postgres addon and get DATABASE_URL variable:

- ```shell
  postgres://qxplxsvhiorntb:487a5774f83b2344771cd56197c96b32ea78884b84ba0b853e5470245a22a5dd@ec2-35-169-92-231.compute-1.amazonaws.com:5432/d58eq3h7umcdvk
  ```

- use DATABASE_URL to define each of the database variables needed to connect straps to heroku:

```
# .env.development

NODE_ENV=development
DATABASE_URL=https://localhost:1337
DATABASE_HOST=ec2-35-169-92-231.compute-1.amazonaws.com
DATABASE_NAME=d58eq3h7umcdvk
DATABASE_USERNAME=qxplxsvhiorntb
DATABASE_PORT=5432
DATABASE_PASSWORD=487a5774f83b2344771cd56197c96b32ea78884b84ba0b853e5470245a22a5dd
```

```json
/* # config/environments/production: */
{
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "postgres",
        "host": "${process.env.DATABASE_HOST}",
        "port": "${process.env.DATABASE_PORT}",
        "database": "${process.env.DATABASE_NAME}",
        "username": "${process.env.DATABASE_USERNAME}",
        "password": "${process.env.DATABASE_PASSWORD}"
      },
      "options": {}
    }
  }
}
```

add a postgres support package called `pg`:

```shell
yarn add pg
```

login to heroku:

```shell
heroku login
```

initialize new git repo and push to heroku:

```shell
git init

# heroku git:remote -a <remote-name>
heroku git:remote - a pennstar-strapi-pgql

git add .

git commit -m "initialize strapi"

git push heroku master
```
