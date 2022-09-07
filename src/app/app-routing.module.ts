import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importar los componentes a usar
import { CreateComponent } from './components/create/create.component'
import { EditComponent } from './components/edit/edit.component'
import { ShowComponent } from './components/show/show.component'

// creacion de las rutas de los componentes
const routes: Routes = [
  { path: '', component:ShowComponent },
  { path: 'create', component:CreateComponent },
  { path: 'edit/:id', component:EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
