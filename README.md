Healthii
=====================

Healthii is a platform that connects Health Care Providers with clients who need those services.  These Providers include Nurse Aides, Physiotherapists, Chiropractors, Massage Therapy and Acupunturists.  The front end was built using Javascript with ReactJS for it's reusable components and fast rendering properties.  Node JS was used for the server.  On the back end the PostGresSQL database was used with Knex as the interface.  There is a SMS sending feature using the Twilio API.  

## Screenshots

!["Screenshot of Healthii Homepage"](Add Link)
!["Screenshot of Healthii Services"](Add Link)
!["Screenshot of Healthii Profiles"](Add Link)


## Usage

Clone the repository.  Navigate to Client folder, 

```
npm install
```

Navigate to server folder and repeat the same command.  

Database seeding:
```
psql
CREATE DATABASE hc2go;
\q

knex migrate:latest
knex seed:run
```

Navigate to server folder:
```
node server.js
```

Navigate to Client folder in another terminal
```
npm start
```

Add .env file to server folder:

DB_HOST=localhost
DB_USER=development
DB_PASS=development
DB_NAME=hc2go
DB_PORT=5432
DB_SSL=true

Add settings.json file to server/routes folder:

{
"user": "development",
"password": "development",
"database": "hc2go",
"hostname": "localhost",
"port": 5432,
"ssl": true
}

Go to localhost:3000 to access the site in your browser.

## Login Information:

Go to localhost:3000/login in your browser

To login as the Provider to see Clients:
username: chris@chris.com
password: pass

To Login as the Clients to leave feedback to Provider(review):
username: linda@linda.com
password: pass

## Dependencies
Server Side:

*"bcrypt": "^2.0.0",
*"cookie-session": "^2.0.0-beta.3",
*"dotenv": "^6.0.0",
*"knex": "^0.14.6",
*"knex-logger": "^0.1.0",
*"morgan": "^1.9.0",
*"node-gyp": "^3.6.2",
*"pg": "^7.4.3",
*"pg-native": "^3.0.0",
*"twilio": "^3.17.2"

Client folder:

*"@material-ui/core": "^1.2.0",
*"bootstrap": "4.0.0-alpha.6",
*"chokidar": "^2.0.3",
*"flag-icon-css": "^2.8.0",
*"moment": "^2.22.2",
*"react": "^16.4.0",
*"react-bootstrap": "^0.32.1",
*"react-datepicker": "^1.5.0",
*"react-dom": "^16.4.0",
*"react-form": "^3.5.5",
*"react-router-dom": "^4.2.2",
*"react-router-hash-link": "^1.2.0",
*"react-scripts": "1.1.4",
*"react-select": "^1.2.1",
*"react-star-rating-component": "^1.4.1",
*"react-table": "^6.8.6",
*"reactjs-popup": "^1.1.1"


