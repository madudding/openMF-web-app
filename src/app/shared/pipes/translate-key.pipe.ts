import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateKey',
  standalone: true
})
export class TranslateKeyPipe implements PipeTransform {
  transform(value: string, type: string): string {
    if (!value) {
      return '';
    }

    let key = '';
    switch (type) {
      case 'inputs':
        key = `labels.inputs.${value}`;
        break;
      case 'catalogs':
        key = `labels.catalogs.${value}`;
        break;
      case 'text':
        key = `labels.text.${value}`;
        break;
      default:
        key = value;
    }
    return key;
  }
}
