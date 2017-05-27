import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class AppService {

    constructor(private http: Http){
    }

    getAppName(){
        return this.http.get("http://localhost:9090/");
    }

}

