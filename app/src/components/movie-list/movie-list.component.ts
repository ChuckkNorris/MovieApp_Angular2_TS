import {Component} from 'angular2/core';
import {FullMovie, Search, Movie} from './movie-list.model';

@Component({
    selector: 'movie-list',
    moduleId: 'app/src/components/movie-list/',
    // http://schwarty.com/2015/12/22/angular2-relative-paths-for-templateurl-and-styleurls/
    templateUrl: 'movie-list.view.html',
    styleUrls: ['movie-list.style.css'],
    inputs: ['movies']
})
export class MovieList {
    private movies: FullMovie[] = [];
} 
