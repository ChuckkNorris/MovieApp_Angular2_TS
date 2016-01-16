
import {Component} from 'angular2/core';
import {Rest, RestRequest} from './restapi/rest.component';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {UxText} from './components/ux-text.component';

interface Search {
    Search: Array<Movie>;
}

interface Movie {
    imdbID: string;
    Title: string;
    Year: number;
    Type: string;
    Poster: string;
}

class Constants {
    public static SearchParameter: string = 's';
    public static ResponseFormat: string = 'r';
}

@Component({
    providers: [HTTP_PROVIDERS],
    selector: 'movie-app',
    templateUrl: 'app/app.view.html',
    directives: [UxText]
})
export class MovieComponent {
    constructor(private _http: Http) {
         this._omdbApi = new Rest('http://www.omdbapi.com', this._http);
    }
    private _omdbApi: Rest;
    public Movies: Movie[];
    public Search(text: string) {
        var request = new RestRequest();
        request.params[Constants.SearchParameter] = text;
        request.params[Constants.ResponseFormat] = 'JSON';
        request.params['tomatoes'] = 'true';

        this._omdbApi.executeRequest<Search>(request).then(search => {
            this.Movies = search.Search;
            window.console.log(this.Movies);     
            window.console.log(this.Movies[0].Poster);     
        });
        this.FindRatings();
    }
    
    public FindRatings() {
        var request = new RestRequest();
        request.params['t'] = 'gladiator';
        request.params[Constants.ResponseFormat] = 'JSON';
        request.params['tomatoes'] = 'true';

        this._omdbApi.executeRequest<Search>(request).then(search => {
           
            window.console.log(this.Movies);     
           // window.console.log(this.Movies[0].Poster);     
        });
    }
}