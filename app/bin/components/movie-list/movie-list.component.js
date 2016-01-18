System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MovieList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MovieList = (function () {
                function MovieList() {
                    this.movies = [];
                }
                MovieList = __decorate([
                    core_1.Component({
                        selector: 'movie-list',
                        moduleId: 'app/src/components/movie-list/',
                        // http://schwarty.com/2015/12/22/angular2-relative-paths-for-templateurl-and-styleurls/
                        templateUrl: 'movie-list.view.html',
                        styleUrls: ['movie-list.style.css'],
                        inputs: ['movies']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieList);
                return MovieList;
            })();
            exports_1("MovieList", MovieList);
        }
    }
});
//# sourceMappingURL=movie-list.component.js.map