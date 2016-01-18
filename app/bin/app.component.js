System.register(['angular2/core', 'angular2/http', './controls/ux-text/ux-text.component', './components/movie-list/movie-api.component', './components/movie-list/movie-list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, ux_text_component_1, movie_api_component_1, movie_list_component_1;
    var MovieComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ux_text_component_1_1) {
                ux_text_component_1 = ux_text_component_1_1;
            },
            function (movie_api_component_1_1) {
                movie_api_component_1 = movie_api_component_1_1;
            },
            function (movie_list_component_1_1) {
                movie_list_component_1 = movie_list_component_1_1;
            }],
        execute: function() {
            MovieComponent = (function () {
                function MovieComponent(_movieApi) {
                    this._movieApi = _movieApi;
                    this.fullMovies = [];
                }
                MovieComponent.prototype.Search = function (text) {
                    var _this = this;
                    this._movieApi.GetMovieByTitle(text).then(function (movie) {
                        _this.fullMovies.push(movie);
                    });
                };
                MovieComponent = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS, movie_api_component_1.MovieApi],
                        moduleId: 'app/src/',
                        selector: 'movie-app',
                        templateUrl: 'app.view.html',
                        styleUrls: ['app.style.css'],
                        directives: [ux_text_component_1.UxText, movie_list_component_1.MovieList]
                    }), 
                    __metadata('design:paramtypes', [movie_api_component_1.MovieApi])
                ], MovieComponent);
                return MovieComponent;
            })();
            exports_1("MovieComponent", MovieComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map