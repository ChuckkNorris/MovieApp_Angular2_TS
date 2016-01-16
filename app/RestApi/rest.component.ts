import { HTTP_PROVIDERS, Http } from 'angular2/http';

export class Rest {
    
    constructor(public baseUrl: string, private http:Http) {}
    
    public params: {[name: string]: string};
    
    public execute() : Promise<string> {
       
        var getStatement = this.http.get(this.baseUrl);
        var prom = new Promise<string>(resolve => 
            getStatement.subscribe((movies) => resolve(movies.text())));
        
        return prom;
        //return Promise.resolve(getStatement);
        // return new Promise<string>(resolve => resolve(
        //     getStatement.subscribe(() => {
        //     
        //     });
        // ))
        // 
      //  return "";
    }
    
    getValue(something: string) : string{
        return "";
        // return new Promise<string>(resolve => {
        //     this.http.get(this.baseUrl).subscribe(() => {
        //     return "";
        //     
        // });
        // );
    }
    
}