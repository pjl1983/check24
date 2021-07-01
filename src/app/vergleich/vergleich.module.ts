import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VergleichComponent } from './vergleich.component';
import { ProductFilterPipe } from '../pipes/product-filter.pipe';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    VergleichComponent,
    ProductFilterPipe
  ],
  exports: [
    VergleichComponent,
    ProductFilterPipe
  ],
  imports: [
    CommonModule,
    ProductModule,
  ]
})
export class VergleichModule { }
