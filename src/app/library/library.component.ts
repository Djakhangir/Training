import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
// import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  //name: string;
  public videoItems:any=[]; 
 
  
constructor( ) { }

  ngOnInit() {
    this.videoItems = [ {
      id:1,
      name:"video1",
      year:1992,
      rating:"A",
      review:5,
      rentalPrice:5,
      available:10,
      price:"$20"
      },
      {
       id:2,
       name:"video2",
       year:1992,
       rating:"A",
       review:1,
       rentalPrice:5,
       available:10,
       price:"$20"
       },
       {
         id:3,
         name:"video3",
         year:1992,
         rating:"A",
         review:2,
         rentalPrice:5,
         available:10,
         price:"$20"
         } ];
         
    }

addNew(form: NgForm){
  if(form.valid === true){
      this.videoItems.push({id:this.videoItems.length+1, ...form.value}); 
    }
    
}

  

}

