import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { AppComponent }  from './app.component';
import { AppService } from './app.service';

const networkInterface = createNetworkInterface('https://api.github.com');

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    req.options.headers.accept = "application/vnd.github.v3+json";
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface,
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  imports:      [ 
                  BrowserModule, 
                  HttpModule , 
                  ApolloModule.forRoot(provideClient)
                ],
  providers:    [ AppService ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
