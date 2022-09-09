import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class fileSizePipe implements PipeTransform {

  transform(size: number): any {
    return (size/2)+"MB";
  }

}
