import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { ElevesComponent } from './eleves/eleves.component';

const routes: Routes = [
  {
    path: "", component: ClassesComponent
  },
  {
    path: "classes/:id/eleves", component: ElevesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
