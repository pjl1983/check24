import { Component } from '@angular/core';
import *  as  Data from './../../../src/assets/handy.json';
import { HandyModel, VergleichFilterEnum } from '../models/handy.model';

@Component({
  selector: 'app-vergleich',
  templateUrl: './vergleich.component.html',
  styleUrls: ['./vergleich.component.scss']
})
export class VergleichComponent {
  products: HandyModel[] = (Data as any).default;
  vergleichFilterEnum = VergleichFilterEnum;
  filterType: VergleichFilterEnum = VergleichFilterEnum.ANGEBOTE;
}
