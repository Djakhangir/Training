import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; //import two things to catch the routes

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;    //defined the var which will contain the path the user are on

  constructor(
    private router:Router  //Inject the router
  ) {               //Whenever somebody clicks on a new router link or url changes to the name of the currentUrl we add class to that;
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);   
  }

  ngOnInit() {
  }

}
