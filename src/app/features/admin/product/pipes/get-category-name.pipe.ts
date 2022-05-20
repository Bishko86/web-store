import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/core/models';

@Pipe({
  name: 'getCategoryName'
})
export class GetCategoryNamePipe implements PipeTransform {

  transform(id: string, categories: Category[]): unknown {
    return categories.find((category) => category.id === id)?.name
  }

}
