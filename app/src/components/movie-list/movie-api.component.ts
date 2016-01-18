import {Component} from 'angular2/core';
import {RestApi, RestRequest} from './rest-api.component';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {FullMovie} from './movie-list.model';

class Constants {
    public static SearchParameter: string = 's';
    public static ResponseFormat: string = 'r';
    public static Title: string = 't';
    public static ImdbId: string = 'i';
    public static GetSrc(path: string) {
        return 'app/src/' + path;
    }
}

@Component({
    providers: [HTTP_PROVIDERS]
})
export class MovieApi {
    constructor(private http: Http) {
        this._omdbApi = new RestApi('http://www.omdbapi.com', this.http);
        this._imdbApi = new RestApi('https://app.imdb.com', this.http);
        this.AddImdbCredentialsParameters();
    }
    private _omdbApi: RestApi;
    private _imdbApi: RestApi;
    
    public GetMovieByTitle(title: string) : Promise<FullMovie> {
        var promiseToReturn : Promise<FullMovie>;
        var request = new RestRequest();
        request.params[Constants.Title] = title;
        request.params[Constants.ResponseFormat] = 'JSON';
        request.params['tomatoes'] = 'true';
        promiseToReturn = new Promise<FullMovie>(resolve => 
        this._omdbApi.executeRequest<FullMovie>(request).then(movie => {
         //   this.fullMovies.push(movie);
            console.log('POSTER FROM API' + movie.Poster);
            window.console.log('TITLE:' + movie);
            resolve(movie);
        }));
        return promiseToReturn;
    }
    
    public GetTop250MoviesOfAllTime() : Promise<FullMovie> {
        // TOP 250
        // https://app.imdb.com/chart/top?appid=iphone1_1&apiPolicy=app1_1&apiKey=2wex6aeu6a8q9e49k7sfvufd6rhh0n&locale=en_US
        var promiseToReturn : Promise<FullMovie[]>;
        var request = new RestRequest();
        request.endPoint = '/chart/top';
        
        this._imdbApi.executeRequest<FullMovie>(request).then(topMovies => {
           var setIt = topMovies; 
        });
        return promiseToReturn;
          
    }
    
     public GetTopShowsOfAllTime() {
        // POPULAR SHOWS
        // https://app.imdb.com/chart/tv?appid=iphone1_1&apiPolicy=app1_1&apiKey=2wex6aeu6a8q9e49k7sfvufd6rhh0n&locale=en_US
    }
    
    private AddImdbCredentialsParameters() {
        this._imdbApi.globalParameters['appid'] = 'iphone1_1';
        this._imdbApi.globalParameters['apiPolicy'] = 'app1_1';
        this._imdbApi.globalParameters['apiKey'] = '2wex6aeu6a8q9e49k7sfvufd6rhh0n';
        this._imdbApi.globalParameters['locale'] = 'en_US';
    }
    //     public Search(text: string) {
    //    // this.GetMoviesDirect();
    //     var request = new RestRequest();
    //     request.params[Constants.SearchParameter] = text;
    //     request.params[Constants.ResponseFormat] = 'JSON';
    //     request.params['tomatoes'] = 'true';
    //     this._omdbApi.executeRequest<Search>(request).then(search => {
    //         this.Movies = search.Search;
    //       //  search.Search.forEach(movie => this.FindRatings(movie.imdbID));
    //       // this.Movies.forEach(movie => this.FindRatings(movie.imdbID));
    //     });
    //     this.FindMovie(text);
    // }
    // 
    // public GetMoviesDirect() {
    //     var rest = new RestApi("http://www.imdb.com/search/title?genres=action&sort=user_rating,desc&title_type=tv_series,mini_series&num_votes=5000,&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2295992002&pf_rd_r=0WP67NH8E64YZKGQNT47&pf_rd_s=right-6&pf_rd_t=15506&pf_rd_i=toptv&ref_=chttvtp_gnr_1", this._http);
    //     var request = new RestRequest();
    //     // request.params[Constants.ImdbId] = imdbId;
    //     // request.params[Constants.ResponseFormat] = 'JSON';
    //     // request.params['tomatoes'] = 'true';
    //     rest.executeRequest<FullMovie>(request).then(movie => {
    //         this.fullMovies.push(movie);
    //         console.log(movie.imdbRating);
    //         window.console.log(movie);
    //     });
    // }
    
    // public FindRatings(imdbId: string) {
    //     var request = new RestRequest();
    //     request.params[Constants.ImdbId] = imdbId;
    //     request.params[Constants.ResponseFormat] = 'JSON';
    //     request.params['tomatoes'] = 'true';
    //     this._omdbApi.executeRequest<FullMovie>(request).then(movie => {
    //         this.fullMovies.push(movie);
    //         console.log(movie.imdbRating);
    //         window.console.log(movie);
    //     });
    // }
}