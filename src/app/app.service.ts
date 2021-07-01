import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HandyModel } from './models/handy.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private productsList: HandyModel[] = [];
  private phoneList = new Subject<HandyModel[]>();

  addProductToList(product: HandyModel) {
    const alreadyAdded = this.productsList.some((listItem: HandyModel) => listItem.id === product.id);
    if (!alreadyAdded) {
      this.productsList.push(product);
    } else {
      this.productsList.splice(this.productsList.findIndex((i) => {
        return i.id === product.id;
      }), 1);
    }
    this.phoneList.next(this.productsList);
  }

  getPhoneList(): Observable<HandyModel[]> {
    return this.phoneList.asObservable();
  }
}
