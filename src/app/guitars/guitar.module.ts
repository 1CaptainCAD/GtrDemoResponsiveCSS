import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuitarRoutingModule } from './guitar-routing.module';
import { GuitarAddComponent } from './guitar-add/guitar-add.component';
import { GuitarDetailComponent } from './guitar-detail/guitar-detail.component';

@NgModule({
  declarations: [GuitarAddComponent, GuitarDetailComponent],
  imports: [
    CommonModule,
    GuitarRoutingModule
  ]
})
export class GuitarModule { }
