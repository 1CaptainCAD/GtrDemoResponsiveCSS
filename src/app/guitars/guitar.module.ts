import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuitarRoutingModule } from './guitar-routing.module';
import { GuitarAddComponent } from './guitar-add/guitar-add.component';
import { GuitarDetailComponent } from './guitar-detail/guitar-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [GuitarAddComponent, GuitarDetailComponent],
  imports: [
    CommonModule,
    GuitarRoutingModule,
    FormsModule
  ]
})
export class GuitarModule { }
