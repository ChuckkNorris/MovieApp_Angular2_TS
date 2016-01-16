System.register(['angular2/core', 'angular2/http', './restapi/rest.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, rest_component_1;
    var MovieClass, MovieComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (rest_component_1_1) {
                rest_component_1 = rest_component_1_1;
            }],
        execute: function() {
            MovieClass = (function () {
                function MovieClass(movieSearchObject) {
                    this.movieSearchObject = movieSearchObject;
                    this.id = this.movieSearchObject.toString();
                }
                return MovieClass;
            })();
            MovieComponent = (function () {
                function MovieComponent(http) {
                    this.http = http;
                }
                MovieComponent.prototype.SetMessage = function () {
                    var _this = this;
                    var rest = new rest_component_1.Rest("http://www.omdbapi.com?s=Batman&r=JSON", this.http);
                    window.console.log(rest.baseUrl);
                    rest.execute().then(function (bytes) { return _this.getBytes(bytes); });
                    this.http.get('http://www.omdbapi.com?s=Batman&r=JSON').subscribe(function (response) {
                        return _this.receive(response);
                    });
                };
                MovieComponent.prototype.getBytes = function (bytes) {
                    window.console.log(bytes);
                    var t = bytes;
                };
                MovieComponent.prototype.receive = function (movies) {
                    var json = movies.json();
                    this.results = json;
                    var result = json;
                    this.MySearch = json;
                    var title = this.MySearch.Search[0].Title;
                    var test = movies;
                    var what = 3;
                    var cool = "YES";
                };
                MovieComponent = __decorate([
                    core_1.Component({
                        providers: [http_1.HTTP_PROVIDERS],
                        selector: 'movie-app',
                        templateUrl: 'app/app.view.html'
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