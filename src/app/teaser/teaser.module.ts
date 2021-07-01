import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaserComponent } from './teaser.component';



@NgModule({
  declarations: [
    TeaserComponent
  ],
  exports: [
    TeaserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeaserModule { }
