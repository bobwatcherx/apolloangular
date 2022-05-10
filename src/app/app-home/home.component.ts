import {Component,OnInit,OnDestroy} from '@angular/core'
import {Subscription} from 'rxjs';
import {Apollo,gql} from 'apollo-angular';

const My_QUERY = gql `
{
  posts{
    userId
    id 
    body
  }
}
`;


@Component({
	selector:"app-home",
	templateUrl:"./home.html",
	styleUrls:["./app.css"]
})

export class HomeComponent implements OnInit,OnDestroy{

	
	constructor(private apollo:Apollo,private querysub: Subscription){}

	posts:any;

	ngOnInit(){
		this.querysub = this.apollo.watchQuery<any>({
			query:My_QUERY
		})
		.valueChanges
		.subscribe(({data})=>{
			this.posts = data.data;
			console.log(data)
		});
	}
	ngOnDestroy(){
		this.querysub.unsubscribe()
	}
}