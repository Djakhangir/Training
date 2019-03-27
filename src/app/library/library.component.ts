import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Router, ActivatedRoute } from "@angular/router";
// import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
// import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  title: string;
  public videoItems:any=[]; 
  public selectedRow: Number;

  
constructor( 
  // private router:Router,
  // private activatedRoute: ActivatedRoute,
 ) { }

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
                    // This object can be used for ngStyle directive by passing it to the 
    // styles = {
    //   'font-style':this.videoItems.review < 5 ? 'grey' : 'normal',
    //   'font-weight':this.videoItems.review< 5 ? 'bold' : 'normal',
    //   'font-size':this.videoItems.review < 5 ? '12px' : '18px'
    // }

                    // Fn for adding the data to the form and increment it automatically with unique id

addNew(form: NgForm){
  if(form.valid === true){
      this.videoItems.push({id:this.videoItems.length+1, ...form.value}); 
    }   // spread syntax used to add form to new incremented id 
}

                  //Fn which allows us select the row we click

setRow(index){  // Do not forget to inject the router service but not when we work without router services;
this.selectedRow = index;
  // this.router.navigate(['library', index], {relativeTo: this.activatedRoute}); this way is with routing services we dont use them here
}

                //rent method to update on click the available items

// this method helps us todecrement the available items we recieve title and in html we assign title to send;
// but on reload information will be back to original; if I want to store in local or session storage in order not loosing 
//the updated data on reload, and avoid uodate of original array and keep in local/session storage I need servers. 
rent(title) {
   title.available -- ;//decrement the available books of title
}

                //if available books became 0, it will stop event and avoid to go to negative numbers;

allRented(title){
  return title.available < 1;
}


              // fn to increase preformance and track by Id add feature trackBy in ngfor directive
  //When we have requests to databse and nothing changed except one name out of hundred it helps to not delte and upload
//again to the DOM, since deleting and uploading everything back several times will congest the DOM. So we use this feature to keep
// everything and update only changed by tracking the ID

// trackById(id:number, videoItems:object):number {
//   return videoItems.id;
// }
              //Passes the information to the input tags and button becomes "save button", after we edit the information in input tag it will save it on click to the table

editRow(){

}

              //delete the row method
              
deleteRow(){
  // for(let i = 0; i < this.videoItems.length; i++){
  
      const index = this.videoItems.indexOf(this.selectedRow);
      if(index >-1) {
      this.videoItems.splice(index, 1);
    } 
  //}
}


  

}

