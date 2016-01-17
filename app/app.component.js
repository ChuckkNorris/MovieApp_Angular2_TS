System.register(['angular2/core', './restapi/rest.component', 'angular2/http', './components/ux-text.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rest_component_1, http_1, ux_text_component_1;
    var Constants, MovieComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rest_component_1_1) {
                rest_component_1 = rest_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ux_text_component_1_1) {
                ux_text_component_1 = ux_text_component_1_1;
            }],
        execute: function() {
            Constants = (function () {
                function Constants() {
                }
                Constants.SearchParameter = 's';
                Constants.ResponseFormat = 'r';
                Constants.Title = 't';
                Constants.ImdbId = 'i';
                return Constants;
            })();
            MovieComponent = (function () {
                function MovieComponent(_http) {
                    this._http = _http;
                    this.fullMovies = [];
                    this._omdbApi = new rest_component_1.Rest('http://www.omdbapi.com', this._http);
                }
                MovieComponent.prototype.Search = function (text) {
                    var _this = this;
                    // this.GetMoviesDirect();
                    var request = new rest_component_1.RestRequest();
                    request.params[Constants.SearchParameter] = text;
                    request.params[Constants.ResponseFormat] = 'JSON';
                    request.params['tomatoes'] = 'true';
                    this._omdbApi.executeRequest(request).then(function (search) {
                        _this.Movies = search.Search;
                        //  search.Search.forEach(movie => this.FindRatings(movie.imdbID));
                        // this.Movies.forEach(movie => this.FindRatings(movie.imdbID));
                    });
                    this.FindMovie(text);
                };
                MovieComponent.prototype.FindMovie = function (title) {
                    var request = new rest_component_1.RestRequest();
                    request.params[Constants.Title] = title;
                    request.params[Constants.ResponseFormat] = 'JSON';
                    request.params['tomatoes'] = 'true';
                    this._omdbApi.executeRequest(request).then(function (movie) {
                        //   this.fullMovies.push(movie);
                        console.log(movie.imdbRating);
                        window.console.log('TITLE:' + movie);
                    });
                };
                MovieComponent.prototype.FindRatings = function (imdbId) {
                    var _this = this;
                    var request = new rest_component_1.RestRequest();
                    request.params[Constants.ImdbId] = imdbId;
                    request.params[Constants.ResponseFormat] = 'JSON';
                    request.params['tomatoes'] = 'true';
                    this._omdbApi.executeRequest(request).then(function (movie) {
                        _this.fullMovies.push(movie);
                        console.log(movie.imdbRating);
                        window.console.log(movie);
                    });
                };
                MovieComponent.prototype.GetMoviesDirect = function () {
                    var _this = this;
                    var rest = new rest_component_1.Rest("http://www.imdb.com/search/title?genres=action&sort=user_rating,desc&title_type=tv_series,mini_series&num_votes=5000,&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=2295992002&pf_rd_r=0WP67NH8E64YZKGQNT47&pf_rd_s=right-6&pf_rd_t=15506&pf_rd_i=toptv&ref_=chttvtp_gnr_1", this._http);
                    var request = new rest_component_1.RestRequest();
                    // request.params[Constants.ImdbId] = imdbId;
                    // request.params[Constants.ResponseFormat] = 'JSON';
                    // request.params['tomatoes'] = 'true';
                    rest.executeRequest(request).then(function (movie) {
                        _this.fullMovies.push(movie);
                        console.log(movie.imdbRating);
                        window.console.log(movie);
                    });
                };
                MovieComponent = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS],
                        selector: 'movie-app',
                        templateUrl: 'app/app.view.html',
                        directives: [ux_text_component_1.UxText]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MovieComponent);
                return MovieComponent;
            })();
            exports_1("MovieComponent", MovieComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map