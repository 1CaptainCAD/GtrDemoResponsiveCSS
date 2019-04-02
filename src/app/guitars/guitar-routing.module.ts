import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuitarAddComponent } from './guitar-add/guitar-add.component';
import { GuitarDetailComponent } from './guitar-detail/guitar-detail.component';


const routes: Routes = [
  {path: 'add', component: GuitarAddComponent},
  {path: ':id', component: GuitarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuitarRoutingModule { }
