import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './home/shell.component';
import { WelcomeComponent } from './home/welcome.component';

const routes: Routes = [
    {
      path: '', component: ShellComponent,
      children: [
        {path: 'welcome', component: WelcomeComponent},
        {path: 'guitars', loadChildren: './guitars/guitar.module#GuitarModule'},
        {path: '', redirectTo: 'welcome', pathMatch: 'full'}
      ]
    },
    {
      path: '**', component: ShellComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
