import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'Filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if( searchText == undefined || searchText == null  )
    {
      return items;
    }
    else
    {
      var result = items.filter(item => 
        Object.keys(item).some(k => item[k] != null && 
        item[k].toString().toLowerCase()
        .includes(searchText.toLowerCase()))
        );
        return result;
    }
    
   }
}