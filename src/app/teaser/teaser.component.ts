import { Component, OnInit } from '@angular/core';
import { HandyModel } from '../models/handy.model';
import * as Data from '../../assets/handy.json';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent implements OnInit {
  phoneBrands: string[] = [];

  ngOnInit() {
    const products: HandyModel[] = (Data as any).default;
    const unique = [...new Set(products.map(item => item.brand))];
    this.phoneBrands = unique.map(value => value.toLowerCase());
  }
}
