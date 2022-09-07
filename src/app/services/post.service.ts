import { Injectable } from '@angular/core';
// modulos para DB con firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';
// importar la interfaz de la carpeta models
import { Inscription } from "../models/post.model"


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private AngularFirestore: AngularFirestore
  ) { }

  // metodos para el crud
    // get para traer todos los elementos
  getPosts() {
    return this.AngularFirestore
      .collection("posts")
      .snapshotChanges() //esto captura el estado actual de la coleccion en firestore
  }
  // get para traer solo el elemento que yo especifique
  getPostById(id: any) {
    return this.AngularFirestore
      .collection("posts")
      .doc(id)
      .valueChanges()
  }

  createPost(post: Inscription) {
    return new Promise<any> (( resolve, reject ) => {
      this.AngularFirestore
        .collection("posts")
        .add(post)
        .then ( response => {
          console.log(response)
        }, error => {
          reject (error)
        })
    })
  }

  updatePost(post: Inscription, id:any) {
    return this.AngularFirestore
      .collection("posts")
      .doc(id)
      .update({
        name: post.name,
        age: post.age,
        dateOfBirth: post.dateOfBirth,
        dateOfInscription: post.dateOfInscription,
        cost: post.cost
      });
  }

  deletePost(post: any) {
    return this.AngularFirestore
      .collection("posts")
      .doc(post.id)
      .delete();

  }
}
