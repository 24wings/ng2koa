import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visitorPipe'
})
export class VisitorPipePipe implements PipeTransform {

  transform(visitors: any, keyword?: string): any {
   return  visitors.filter(visitor=>visitor.name.indexOf(keyword)!=-1 ||  visitor.phone.indexOf(keyword)!=-1 ||visitor.gender.indexOf(keyword)!=-1 )

  }

}
