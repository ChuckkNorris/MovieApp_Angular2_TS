
import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {UxText} from './controls/ux-text/ux-text.component';
import {FullMovie, Search, Movie} from './components/movie-list/movie-list.model';
import {MovieApi} from './components/movie-list/movie-api.component'
import {MovieList} from './components/movie-list/movie-list.component';

@Component({
    providers: [HTTP_PROVIDERS, MovieApi],
    moduleId: 'app/src/',
    selector: 'movie-app',
    templateUrl: 'app.view.html', //Constants.GetSrc('app.view.html'),
    styleUrls: ['app.style.css'],
    directives: [UxText, MovieList]
})
export class MovieComponent {
    constructor(private _movieApi : MovieApi){}
    public fullMovies: FullMovie[] = [];
    public Search(text: string){
        this._movieApi.GetMovieByTitle(text).then(movie => {
            this.fullMovies.push(movie)
        });
    }
    
}