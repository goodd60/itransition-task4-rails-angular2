import {Component,Input, OnInit, Output, EventEmitter,ViewChild} from 'angular2/core'
import {RouteParams}  from 'angular2/router'
import {Row} from './row'
import {Http, Headers, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';

@Component({
    selector: 'home',
    templateUrl: '/app/home.component.html'
})

export class HomeComponent 
{
    @Input() Rows: Array<Row>;
    response="";
    constructor( public http: Http)
    { 
        this.Rows=new Array<Row>();
        this.Rows.push(new Row());
    }
    send(new_str:string,input:any)
    {
        input.value="";
        var row=this.Rows[this.Rows.length-1];
        row.show=false;
        row.response=new_str;
        var params = JSON.stringify( { str: new_str } );
        var headers = new Headers(); 
            headers.append('Authorization','Basic somethingsomethinghidden');
            headers.append('X-SyncTimeout','30');
            headers.append('Accept','application/json');
            headers.append('Cache-Control','no-cache');
            headers.append('Content-Type','application/json');
            this.http.post('http://localhost:3000/api',params,{headers: headers})
            .subscribe(request=>row.request=request.json().some);    
        this.Rows.push(new Row());
        this.response="";
    }
}   