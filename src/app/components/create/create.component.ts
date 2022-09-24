import { Component, OnInit } from '@angular/core';

//importamos el servicio
import { PostService } from 'src/app/services/post.service';

//importamos los modulos para formularios
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//importamos el enrutador
import { Router } from '@angular/router';
import { MyValidator } from '../../validator1';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public postForm: FormGroup;
  element: any;
  age: any;


  showData() {
    if (this.age < 18){
      return (this.element = false);
    }
    else {
      return (this.element = true);
    }
  }

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.postForm = formBuilder.group({});
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.postForm = this.formBuilder.group({ //esta linea inicializa los campos del formulario
      name: [''],
      age: ['', [Validators.min(18), Validators.required]],
      dateOfBirth: ['', Validators.required],
      dateOfInscription:['', Validators.required],
      cost:['', Validators.required]
    }, {
      validators: [MyValidator.inscriptionHigher, MyValidator.matchAge, MyValidator.matchCost, MyValidator.matchName]
    }
    )
    console.log(this.postForm)
  }

  get ageField() {
    return this.postForm.get('age');
  }

  get inscriptionField() {
    return this.postForm.get('dateOfInscription');
  }

  get birthField() {
    return this.postForm.get('dateOfBirth');
  }

  get costField() {
    return this.postForm.get('cost');
  }

  get nameField() {
    return this.postForm.get('name');
  }

  onSubmit() {
    this.postService.createPost(this.postForm.value) //esta linea introduce la nueva informacion tomando los valores de postform (title,content,author)
    this.router.navigate( [''] )
  }
}
