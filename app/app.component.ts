
import {Component} from 'angular2/core';
import { HTTP_PROVIDERS, Http } from 'angular2/http';
import { Rest } from './restapi/rest.component';

interface Search {
    Search: Array<MovieInterface>;
    
}
interface MovieInterface {
  
    imdbID: string;
    Title: string;
    Year: number;
    Type: string;
    Poster: string;
}

class MovieClass {
    constructor(private movieSearchObject: Object) {}
    id: string = this.movieSearchObject.toString();
    Title: string;
    Year: number;
    type: string;
    poster: string;
}

@Component({
    providers: [HTTP_PROVIDERS],
    selector: 'movie-app',
    templateUrl: 'app/app.view.html'
})
export class MovieComponent {
    constructor(private http:Http) {
            
    }
    private message: string;
    public MySearch: Search;
    
    public SetMessage() {
        
        var rest = new Rest("http://www.omdbapi.com?s=Batman&r=JSON", this.http);
        window.console.log(rest.baseUrl);
        rest.execute().then(bytes => this.getBytes(bytes));
        this.http.get('http://www.omdbapi.com?s=Batman&r=JSON').subscribe((response) => 
        this.receive(response));
        
    }
    
    private getBytes(bytes: string){
        window.console.log(bytes);
        var t = bytes;
    }
    results: Object[];
    private receive(movies){
        var json = movies.json();
        this.results = json;
        var result = json;
        this.MySearch = <Search>json;
        var title = this.MySearch.Search[0].Title;
        var test = movies;
        
        var what = 3;
        var cool = "YES";
    }

}