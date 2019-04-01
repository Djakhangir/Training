import { Component, OnInit } from '@angular/core'; 
import { DataService } from '../data.service'; //import service to use the method with get request
import { Observable } from 'rxjs'; // imported to subscribe to the 


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
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
