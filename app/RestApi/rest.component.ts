import { HTTP_PROVIDERS, Http } from 'angular2/http';

export class Rest {
    
    constructor(public baseUrl: string, private http:Http) {}
    
    public params: {[name: string]: string} = {};
    
    public execute() : Promise<string> {
       
        var getStatement = this.http.get(this.getFullUrl());
        var prom = new Promise<string>(resolve => 
            getStatement.subscribe((movies) => resolve(movies.text())));
        
        return prom;
    }
    
    public getFullUrl(){
        var isFirst = true;
        var queryString = '?';
        for (var key in this.params){
            if (!isFirst)
                queryString += '&';
            else isFirst = false;
            queryString += key + '=' + this.params[key]
        }
        window.console.log(queryString);
        return this.baseUrl + queryString;
    }
    
}