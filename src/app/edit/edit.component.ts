import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; //import service to use the method with get request
import { Observable } from 'rxjs'; // imported to subscribe to the 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  photo$:Object;

  constructor(  //Dependency injection;
    private data:DataService,
    private route:ActivatedRoute
    ) {
      this.route.params.subscribe(params => this.photo$ = params.id) //get parameters of certain photo
     }

  ngOnInit() {
    this.data.getPhotos(this.photo$).subscribe(data => this.photo$ = data)
}

}
