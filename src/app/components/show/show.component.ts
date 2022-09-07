import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Inscription } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  posts: Inscription[] = [];

  constructor(
    private PostService: PostService
  ) { }

  ngOnInit(): void {
    this.PostService.getPosts()
      .subscribe( res => {
        // this.posts = [{id:'1', 'title':'titulo de prueba', 'content': 'contenido de prueba', 'author':'Andres'}]
        this.posts = res.map( e => {//en este punto estoy asignando a posts el id (payload.doc.id) y los datos (payload.doc.data)
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as {}
          }as Inscription;
        });

        console.log(this.posts)
      });

  };

  deleteRow ( post: Inscription) {
    this.PostService.deletePost(post);
  }

};
