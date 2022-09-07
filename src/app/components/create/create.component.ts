import { Component, OnInit } from '@angular/core';

//importamos el servicio
import { PostService } from 'src/app/services/post.service';

//importamos los modulos para formularios
import { FormBuilder, FormGroup } from '@angular/forms';

//importamos el enrutador
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public postForm: FormGroup;


  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.postForm = this.formBuilder.group({ //esta linea inicializa los campos del formulario
      name: [''],
      age: [''],
      dateOfBirth: [''],
      dateOfInscription:[''],
      cost:['']
    })
    console.log(this.postForm)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postService.createPost(this.postForm.value) //esta linea introduce la nueva informacion tomando los valores de postform (title,content,author)
    this.router.navigate( [''] )
  }
}
