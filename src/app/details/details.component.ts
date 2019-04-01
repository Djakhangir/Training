import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; //import service to use the method with get request
import { Observable } from 'rxjs'; // imported to subscribe to the 
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user$:Object; //Created the property to hold returned data from the API (inside Service)

constructor(  // dependency injection by creating the instance to use Services
  private data:DataService,
  private route:ActivatedRoute
  ) { //inside the contructor we reference the route instance ot get the params and subscribe where params returns as object user$ linked to params.id
this.route.params.subscribe(params => this.user$ = params.id) //to get the params of id refered to the router as library/:id
   }   

//ngOnInit is one of the lifecycle hooks of angular; we create a method inside ngOnInIt to use that method
//on initialisation of the app when component loads; 
  ngOnInit() { //So the way we access the methods and properties defined inside the dataService is through below example:
    this.data.getUser(this.user$).subscribe( // basically we use getUser method from data which is instance above for our DataService;
      data => this.user$ = data // and pass the user$ object as parameter of the method, 
      // then we subscribe to that with observables by saying that data instance linked with DataService
  )}        // has to return as bound object "user" created above and data instance together. 
  

}
