# Assignment #2

API in Node.js using Express to access TicketMaster API.

### Dependencies

express - Handling HTTP requests
debug – Debug messages
mocha and chai - Unit tests

### Structure

seca-server.mjs - file that constitutes the entry point to the server application
seca-web-api.mjs - implementation of the HTTP routes that make up the REST API of the web application
seca-services.mjs - implementation of the logic of each of the application's functionalities
tm-events-data.mjs - access to the Tickermaster API.
seca-data-mem.mjs - access to seca data (groups and users), in this version stored in memory .

seca-server.mjs -> seca-web-api.mjs -> seca-services.mjs -> tm-events-data.mjs
-> seca-data-mem.mjs

### Authors

Group 1: 
- Bernardo Pontes 
- Margarida Pascoal

### License
Unlicensed