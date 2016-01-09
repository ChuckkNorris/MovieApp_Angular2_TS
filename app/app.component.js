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
    var MovieComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MovieComponent = (function () {
                function MovieComponent() {
                }
                /**
                 * SetMessage
                 */
                MovieComponent.prototype.SetMessage = function () {
                    this.message = 'this works';
                    this.message = 's';
                    this.message = 's';
                    this.message = '333';
                    this.message = '444';
                };
                MovieComponent = __decorate([
                    core_1.Component({
                        selector: 'movie-app',
                        templateUrl: 'app/app.view.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MovieComponent);
                return MovieComponent;
            })();
            exports_1("MovieComponent", MovieComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map