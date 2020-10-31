import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterAll' })
export class FilterTablePipe implements PipeTransform {
  transform(value: any, searchText: any): any {
    if(!searchText) {
      return value;
    }
    return value.filter((data) => this.matchValue(data,searchText)); 
  }

  matchValue(data, value) {
    return Object.keys(data).map((key) => {
       return new RegExp(value, 'gi').test(data[key]);
    }).some(result => result);
  }

 }

















// @Pipe({
//   name: 'tableFilter'
// })
// export class TableFilterPipe implements PipeTransform {


//   transform(list: any[], value: string) {
  
//     console.log(list);
//     console.log(value);
//     return value ? list.filter(item => item.category_Name.toLowerCase() === value.toLowerCase()) : list;
//   }

//   // transform(list: any[], filters: Object) {
//   //   const keys       = Object.keys(filters).filter(key => filters[key]);
//   //   const filterUser = user => keys.every(key => user[key] === filters[key]);

//   //   return keys.length ? list.filter(filterUser) : list;
//   // }

// }