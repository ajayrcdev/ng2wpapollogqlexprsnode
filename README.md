# angular webpack apollo graphQL express node
A seed repo with Client and Server as separate apps (and NPM modules) deployable on Docker and Nginx proxy.
(Typescript and ES6 are used wherever possible)
* Client
    * Angular2+ 
    * TypeScript 
    * Webpack 
    * ApolloAngular 
    * Karma 
    * Protractor 
    * Docker
* Server
    * GraphQL (Typescript)
    * ExpressJs and NodeJs 
    * Docker
* Nginx

# steps used to make this repo in that order
* Client:
    * Angular(4.0.0):
    1) download/clone angular seed https://github.com/angular/quickstart to a separate folder
    2) checkout tag/branch of your choice. i did "git checkout 4.0.0" to get ngv 4
    3) Delete non-essential files as metioned in read me of quickstart.
       i removed following:
       * .git
       * LICENSE
       * non-essential-files.txt
       * non-essential-files.osx.txt
       * README.md
       * CHANGELOG.md
    4) keep the residual files/folder in root folder
    5) added Client and Server folder and moved Angular code there
    6) moved .gitignore file to root and changed path to client/src...
    7) "npm i"
    8) "npm run start" and verify the app working
    9) other commands like "npm run test" , "npm run e2e", "npm run lint" would work too
* Server:
    * ExpressJs on NodeJs:
        1) "npm init" to create new npm module for server
        2) "npm i express --save" to install express js server
        3) write necessary routes and listners for required port (i am using 9090)
        4) "node index.js" and open browse with localhost:9090/ to test the server is running
        5) fixed gitignore to remove all node_modules and not just that of the client
* Client+Server communication:
    1) Add CORS on serverside (to allow requests from another domain on localhost)
    1) Add a (ng) service to client component to get data from serer
    2) Call server (localhost:9090/) and show the response   
* GraphQL:
    * Schema:
    * Resolvers: 
    * Mocks
* Apollo:
    1) Add Apollo Angular in client as dependency
    2) Replace http call with Apollo Query in service
    3) Call the Apollo Query to get the same data as service
* Webpack:
* Docker: 

# Useful reading material
* Angular IO - quickstart
    * Using quickstart (the way i did here): https://angular.io/docs/ts/latest/quickstart.html
    * or using Angular CLI - easier way : https://angular.io/docs/ts/latest/cli-quickstart.html
* Installing and testing Typesript: http://blog.teamtreehouse.com/getting-started-typescript
* ExpressJs : 
    * https://expressjs.com/en/starter/hello-world.html 
    * https://expressjs.com/en/guide/routing.html    
* Apollo:
    * http://dev.apollodata.com/angular2/
    * System Js Configs: https://github.com/Urigo/angular.io/blob/graphql-cookbook/public/docs/_examples/heroes-graphql/ts/src/systemjs.config.extras.js
    * https://github.com/apollographql/GitHunt-Angular
    * http://dev.apollodata.com/angular2/auth.html 
    * https://developer.github.com/v3/
    
