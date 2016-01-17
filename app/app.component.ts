
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
    tomatoRating: number;
    tomatoUserMeter: number;
    imdbRating: number;
}

interface FullMovie {
    Actors: string;
    Awards:  string;
    BoxOffice:  string;
    Country:  string;
    DVD:  string;
    Director:  string;
    Genre:  string;
    Language:  string;
    Metascore:  string;
    Plot:  string;
    Poster:  string;
    Production:  string;
    Rated:  string;
    Released:  string;
    Response:  string;
    Runtime:  string;
    Title:  string;
    Type:  string;
    Website:  string;
    Writer:  string;
    Year:  string;
    imdbID:  string;
    imdbRating:  string;
    imdbVotes:  string;
    tomatoConsensus:  string;
    tomatoFresh:  string;
    tomatoImage:  string;
    tomatoMeter: string;
    tomatoRating:  string;
    tomatoReviews:  string;
    tomatoRotten:  string;
    tomatoURL:  string;
    tomatoUserMeter: string;
    tomatoUserRating:  string;
    tomatoUserReviews:  string;
}

class Constants {
    public static SearchParameter: string = 's';
    public static ResponseFormat: string = 'r';
    public static Title: string = 't';
    public static ImdbId: string = 'i';
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
    public fullMovies: FullMovie[] = [];
    public Search(text: string) {
       // this.GetMoviesDirect();
        var request = new RestRequest();
        request.params[Constants.SearchParameter] = text;
        request.params[Constants.ResponseFormat] = 'JSON';
        request.params['tomatoes'] = 'true';

        this._omdbApi.executeRequest<Search>(request).then(search => {
            this.Movies = search.Search;
          //  search.Search.forEach(movie => this.FindRatings(movie.imdbID));
          // this.Movies.forEach(movie => this.FindRatings(movie.imdbID));
        });
        this.FindMovie(text);
    }
    public FindMovie(title: string) {
        var request = new RestRequest();
        request.params[Constants.Title] = title;
        request.params[Constants.ResponseFormat] = 'JSON';
        request.params['tomatoes'] = 'true';
        this._omdbApi.executeRequest<FullMovie>(request).then(movie => {
         //   this.fullMovies.push(movie);
            console.log(movie.imdbRating);
            window.console.log('TITLE:' + movie);
        });
    }
    
    public FindRatings(imdbId: string) {
        var request = new RestRequest();
        request.params[Constants.ImdbId] = imdbId;
        request.params[Constants.ResponseFormat] = 'JSON';
        request.params['tomatoes'] = 'true';
        this._omdbApi.executeRequest<FullMovie>(request).then(movie => {
            this.fullMovies.push(movie);
            console.log(movie.imdbRating);
            window.console.log(movie);
        });
    }
    
    public GetMoviesDirect() {
        var rest = new Rest("http://www.imdb.com/search/title?genres=action&sort=user_rating,desc&title_type=tv_series,mini_series&num_votes=5000,&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2295992002&pf_rd_r=0WP67NH8E64YZKGQNT47&pf_rd_s=right-6&pf_rd_t=15506&pf_rd_i=toptv&ref_=chttvtp_gnr_1", this._http);
        var request = new RestRequest();
        // request.params[Constants.ImdbId] = imdbId;
        // request.params[Constants.ResponseFormat] = 'JSON';
        // request.params['tomatoes'] = 'true';
        rest.executeRequest<FullMovie>(request).then(movie => {
            this.fullMovies.push(movie);
            console.log(movie.imdbRating);
            window.console.log(movie);
        });
    }
}