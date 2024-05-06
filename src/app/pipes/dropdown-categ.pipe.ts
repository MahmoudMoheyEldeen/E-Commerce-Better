import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'dropdownCateg',
})
export class DropdownCategPipe implements PipeTransform {
  transform(products: Product[], searchItem: string): Product[] {
    if (searchItem == 'All') {
      return products;
    } else {
      return products.filter((p) =>
        p.category.name.toLowerCase().includes(searchItem.toLowerCase())
      );
    }
  }
}
