# ng2 wp apollo gql exprs node
A seed repo as NPM Module with Client and Server as separate apps deployable on Docker and Nginx proxy
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

# steps used to make this repo
* Client:
 * Angular(4.0.0):
    1) download/clone angular seed https://github.com/angular/quickstart to a separate folder
    2) checkout tag/branch of your choice. i did "git checkout 4.0.0" to get ngv 4
    3) Delete non-essential files as metioned in read me of quickstart
       i removed following 
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
    * NodeJs
    * ExpressJs
* GraphQL:
    * Schema:
    * Resolvers: 
    * Mocks
* Apollo:
* Webpack:
* Docker: 

# Useful reading material
* Angular IO - quickstart
    * Using quickstart (the way i did here): https://angular.io/docs/ts/latest/quickstart.html
    * or using Angular CLI - easier way : https://angular.io/docs/ts/latest/cli-quickstart.html
* Installing and testing Typesript: http://blog.teamtreehouse.com/getting-started-typescript
