import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { AppService } from './app.service';

// We use the gql tag to parse our query string into a query document
const CurrentUserForProfile = gql`
  query CurrentUserForProfile {
    users {
      login
      avatar_url
    }
  }
`;

interface QueryResponse{
  currentUser: Object;
  loading: boolean;
}

@Component({
  moduleId:  module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit  { 
 
  name = ''; 
  loading: boolean;
  currentUser: any;

  constructor(private appService: AppService, private apollo: Apollo) {
     appService.getAppName().subscribe( (response) => {
            this.name = response.text();
      });
  }

  ngOnInit() {
    this.apollo.watchQuery<QueryResponse>({
      query: CurrentUserForProfile,
      variables: {
        since: 2
      }
    }).subscribe(({data}) => {
  //    this.loading = data.loading;
      console.log(JSON.stringify(data));
//      this.currentUser = data.currentUser;
    });
  }

}
