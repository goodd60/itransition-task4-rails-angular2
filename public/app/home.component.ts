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
    up=0;
    constructor( public http: Http)
    { 
        this.Rows=new Array<Row>();
        this.Rows.push(new Row());
    }
     onKey(event: KeyboardEvent) {
        if(event.keyCode==38 || event.keyCode==40)
        {
             console.log(this.up);
             if(this.up < this.Rows.length-1 && event.keyCode==38)
                    this.up++;
             if(event.keyCode==40 && this.up>0)
                this.up--;
            if(this.Rows.length>1)
            {
                console.log(this.Rows[this.Rows.length-1-this.up]);
                console.log(this.Rows[this.Rows.length-1-this.up].response);
                this.response=this.Rows[this.Rows.length-1-this.up].response;         
            }
           
        }

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
            .subscribe(request=>{
                row.request=request.json().some;
            });    
        this.Rows.push(new Row());
        this.response="";
        this.up=0;
    }
}   