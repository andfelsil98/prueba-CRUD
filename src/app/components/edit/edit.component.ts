import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Inscription } from 'src/app/models/post.model';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup;
  postRef: any

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.formBuilder.group({
      name: [''],
      age: [''],
      dateOfBirth:[''],
      dateOfInscription:[''],
      cost:['']
    })
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id'); //con esta linea estoy capturando el id
    this.postService.getPostById(id) //form group y form builder se dedican a capturar lo que se ingrese en el formulario y asignarlo aca
    .subscribe( res => {
      this.postRef = res
      this.editForm = this.formBuilder.group({
        name: [this.postRef.name],
        age: [this.postRef.age],
        dateOfBirth: [this.postRef.dateOfBirth],
        dateOfInscription: [this.postRef.dateOfInscription],
        cost: [this.postRef.cost]
      })
    })
  }


  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.postService.updatePost(this.editForm.value, id) //le paso todos los valores del formulario y el id
    this.router.navigate([''])
  }
}
