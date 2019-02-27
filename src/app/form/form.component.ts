import { FormService } from './../form.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/post.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  posts: Post[] = [];
  post: Post;
  constructor(private service: FormService) { }

  ngOnInit() {
    this.post = new Post();
    this.service.getPosts();
    this.service.getPostUpdateListener()
      .subscribe(posts => {
        this.posts = posts;
      });
  }
  submit(val: Post) {
    this.post.clientName = '';
    this.post.dueDate = '';
    let pst = new Post(null,this.post.clientName,this.post.discoveryType,this.post.dateServed, this.post.byCtorder, this.post.dueDate, this.post.directedToParty, this.post.directedTo, this.post.servedBy, this.post.due, this.post.toCltforCert, this.post.servedDate, this.post.discNotes);
    this.post = new Post();
    this.service.savePost(pst);
  }

}
