import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], input: string): any {

    if (input == undefined) {
      return list
    }

    //** search country
    if(list){
      let result = new Array();
      for (let i = 0; i < list.length; i++) {
        if(list[i].name.toLowerCase().indexOf(input.toLowerCase())>-1){
          result.push(list[i])
        }
      }
      return result;
    }
  }

}
