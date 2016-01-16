import {Component} from 'angular2/core';

@Component({
    selector: 'ux-textbox',
    templateUrl: 'app/components/ux-text.view.html',
    inputs: ['text']
})
export class UxText{
    public text: string;
}