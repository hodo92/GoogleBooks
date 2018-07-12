import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}


// import { Pipe, PipeTransform } from '@angular/core';
// import { Movie } from './movie';

// @Pipe({
//     name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//     transform(items: Movie[], currentSearchTerm: string): Movie[] {
//         if (!items) { return []; }
//         if (!currentSearchTerm) { return items; }

//         currentSearchTerm = currentSearchTerm.toLowerCase();

//         return items.filter(it => {
//             return it.title.toLowerCase().includes(currentSearchTerm);
//         });
//     }
// }
