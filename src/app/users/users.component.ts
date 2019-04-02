import { Component, OnInit } from '@angular/core'; 
import { DataService } from '../data.service'; //import service to use the method with get request
import { Observable } from 'rxjs'; // imported to subscribe to the service;
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations'; // imported bunch of animation fns;


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [ // add animation property ; the name of the animation isnt important;
    trigger('listStagger', [ //we can have multiple triggers in case we have multiple animation types for single component;
      transition('* <=> *',[  // defined transition from the top - there documentation in web;
        // '*<=>*' - means anything defined in a second arg will take place when any type of transition occurs from state to any state; * wildcard
        query(':enter',  //and it says when something enters do the second argument
        [
          style({opacity:0, transform:'translateY(-15px)'}),
          stagger('150ms',
          animate('550ms ease-out',
          style({opacity:1, transform:'translateY(0px)'})))
        ], {optional:true}),
        query(':leave', animate('50ms', style({opacity:0})), { //when somebody leave it takes this animation;
          optional:true})
      ])
    ])
  ]// animation to have in component this styles have to be included; and then add binding in html to access animation
})
export class UsersComponent implements OnInit {
  users$:Object; //Created the property to hold returned data from the API (inside Service)

  constructor( private data:DataService ) { } // dependency injection by creating the instance to use Service

  //ngOnInit is one of the lifecycle hooks of angular; we create a method inside ngOnInIt to use that method
  //on initialisation of the app when component loads; 
  ngOnInit() { //So the way we access the methods and properties defined inside the dataService is through below example:
    this.data.getUsers().subscribe( // basicaly we use getUsers method from data which is instance above for our DataService;
      data => this.users$ = data     // and we subscribe to that with observables by saying that data instance linked with DataService
    )}                             // has to return as bound object users created above and data instance. 

  

}
