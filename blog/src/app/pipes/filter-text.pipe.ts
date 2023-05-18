import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText',
})
export class FilterTextPipe implements PipeTransform {
  transform(value: any[], filterText: any): any {
    if (!value) {
      return null;
    }

    if (!filterText) {
      return value;
    }

    filterText = filterText.toLowerCase();

    return value.filter((val) => val.text.toLowerCase().includes(filterText));
  }
}
