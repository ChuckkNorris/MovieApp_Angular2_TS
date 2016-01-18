System.register(['angular2/core', './rest-api.component', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rest_api_component_1, http_1;
    var Constants, MovieApi;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rest_api_component_1_1) {
                rest_api_component_1 = rest_api_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Constants = (function () {
                function Constants() {
                }
                Constants.GetSrc = function (path) {
                    return 'app/src/' + path;
                };
                Constants.SearchParameter = 's';
                Constants.ResponseFormat = 'r';
                Constants.Title = 't';
                Constants.ImdbId = 'i';
                return Constants;
            })();
            MovieApi = (function () {
                function MovieApi(http) {
                    this.http = http;
                    this._omdbApi = new rest_api_component_1.RestApi('http://www.omdbapi.com', this.http);
                    this._imdbApi = new rest_api_component_1.RestApi('https://app.imdb.com', this.http);
                    this.AddImdbCredentialsParameters();
                }
                MovieApi.prototype.GetMovieByTitle = function (title) {
                    var _this = this;
                    var promiseToReturn;
                    var request = new rest_api_component_1.RestRequest();
                    request.params[Constants.Title] = title;
                    request.params[Constants.ResponseFormat] = 'JSON';
                    request.params['tomatoes'] = 'true';
                    promiseToReturn = new Promise(function (resolve) {
                        return _this._omdbApi.executeRequest(request).then(function (movie) {
                            //   this.fullMovies.push(movie);
                            console.log('POSTER FROM API' + movie.Poster);
                            window.console.log('TITLE:' + movie);
                            resolve(movie);
                        });
                    });
                    return promiseToReturn;
                };
                MovieApi.prototype.GetTop250MoviesOfAllTime = function () {
                    // TOP 250
                    // https://app.imdb.com/chart/top?appid=iphone1_1&apiPolicy=app1_1&apiKey=2wex6aeu6a8q9e49k7sfvufd6rhh0n&locale=en_US
                    var promiseToReturn;
                    var request = new rest_api_component_1.RestRequest();
                    request.endPoint = '/chart/top';
                    this._imdbApi.executeRequest(request).then(function (topMovies) {
                        var setIt = topMovies;
                    });
                    return promiseToReturn;
                };
                MovieApi.prototype.GetTopShowsOfAllTime = function () {
                    // POPULAR SHOWS
                    // https://app.imdb.com/chart/tv?appid=iphone1_1&apiPolicy=app1_1&apiKey=2wex6aeu6a8q9e49k7sfvufd6rhh0n&locale=en_US
                };
                MovieApi.prototype.AddImdbCredentialsParameters = function () {
                    this._imdbApi.globalParameters['appid'] = 'iphone1_1';
                    this._imdbApi.globalParameters['apiPolicy'] = 'app1_1';
                    this._imdbApi.globalParameters['apiKey'] = '2wex6aeu6a8q9e49k7sfvufd6rhh0n';
                    this._imdbApi.globalParameters['locale'] = 'en_US';
                };
                MovieApi = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], MovieApi);
                return MovieApi;
            })();
            exports_1("MovieApi", MovieApi);
        }
    }
});
//# sourceMappingURL=movie-api.component.js.map