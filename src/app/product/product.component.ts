import { Component, Input, OnInit } from '@angular/core';
import { HandyModel } from '../models/handy.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: HandyModel | undefined;
  @Input() displayLikeButton: boolean = false;
  productHasBeenAdded: boolean = false;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }

  addProduct(product: HandyModel) {
    this.productHasBeenAdded = !this.productHasBeenAdded;
    this.appService.addProductToList(product);
  }
}
