import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceWithTax',
  standalone: true
})
export class PriceWithTaxPipe implements PipeTransform {

  transform(value: number, taxRate: number = 0.13): string {
    if (value == null) return '';
    const priceWithTax = value * (1 + taxRate);
    return `$${priceWithTax.toFixed(2)}`;
  }

}
