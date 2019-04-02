import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; //import service to use the method with get request
import { Observable } from 'rxjs'; // imported to subscribe to the 

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Object;

  constructor(private data:DataService) { }

  ngOnInit() {

    this.data.getPosts().subscribe(data=>this.posts = data)
  }

}
