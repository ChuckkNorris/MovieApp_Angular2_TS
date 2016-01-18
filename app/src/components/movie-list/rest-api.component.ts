import {Component, Directive} from 'angular2/core';
import { HTTP_PROVIDERS, Http, RequestOptionsArgs, Headers } from 'angular2/http';

export class RestApi {
    
    constructor(public baseUrl: string, private http: Http) {}
    public globalParameters: {[name: string]: string} = {};
    public executeRequest<T>(request: RestRequest) : Promise<T> {
        var getStatement = this.http.get(this.getFullUrl(request));
        var promiseToReturn = new Promise<T>(resolve => 
            getStatement.subscribe((response => {
                window.console.log(response.json());
                resolve(<T>response.json());
            })));
        return promiseToReturn;
    }
    
     public getFullUrl(restRequest: RestRequest){
        var toReturn = this.baseUrl;
        var isFirst = true;
        if (restRequest.endPoint != undefined)
            toReturn += restRequest.endPoint
            
        var queryString = '?';
        for (var key in this.globalParameters){
            if (!isFirst)
                queryString += '&';
            else isFirst = false;
            queryString += key + '=' + this.globalParameters[key]
        }
        
        for (var key in restRequest.params){
            if (!isFirst)
                queryString += '&';
            else isFirst = false;
            queryString += key + '=' + restRequest.params[key]
        }
        window.console.log('REST URL: ' + toReturn + queryString);
        return toReturn + queryString;
    }
    
    
}

export class RestRequest{
     public params: {[name: string]: string} = {};
     public endPoint: string;
}