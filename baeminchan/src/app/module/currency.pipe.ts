import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

 transform(value: any): any {
   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
 }

}