
import {Component} from 'angular2/core';

@Component({
    selector: 'movie-app',
    templateUrl: 'app/app.view.html'
})
export class MovieComponent {
    private message: string;
    
    /**
     * SetMessage
     */
    public SetMessage() {
        this.message = 'this works';
        this.message = 's';
        this.message = 's';
        this.message = '333';
        this.message = '444';
    }

}