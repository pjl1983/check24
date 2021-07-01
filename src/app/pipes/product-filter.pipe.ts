import { Pipe, PipeTransform } from '@angular/core';
import { HandyModel, VergleichFilterEnum } from '../models/handy.model';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: HandyModel[], filterType: string): HandyModel[] {
    if (filterType === VergleichFilterEnum.ANGEBOTE) {
      return value.filter(val => val.price_reduced);
    }

    if (filterType === VergleichFilterEnum.BELIEBTHEIT) {
      return value.filter(val => val.rating >= 4);
    }

    if (filterType === VergleichFilterEnum.NEUHEITEN) {
      return value.filter(val => val.new);
    }

    if (filterType === VergleichFilterEnum.TOPSELLER) {
      return value.filter(val => val.topseller);
    }

    return value;
  }
}
