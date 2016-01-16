import {Component, Directive} from 'angular2/core';
import { HTTP_PROVIDERS, Http } from 'angular2/http';

export class Rest {
    
    constructor(public baseUrl: string, private http: Http) {}
   
    
    public executeRequest<T>(request: RestRequest) : Promise<T> {
        var getStatement = this.http.get(this.getFullUrl(request.params));
        var prom = new Promise<T>(resolve => 
            getStatement.subscribe((movies => {
                resolve(<T>movies.json());
            })));
        return prom;
    }
    
     public getFullUrl(params: any){
        var isFirst = true;
        var queryString = '?';
        for (var key in params){
            if (!isFirst)
                queryString += '&';
            else isFirst = false;
            queryString += key + '=' + params[key]
        }
        return this.baseUrl + queryString;
    }
}

export class RestRequest{
     public params: {[name: string]: string} = {};
}