import { Directive,HostListener ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appActiveMenu]'
})
export class ActiveMenuDirective {
  

  constructor(public el:ElementRef) { 
  var dom:HTMLUListElement=  this.el.nativeElement;
      for(var i=0;i<dom.children.length;i++){
    var item =dom.children.item(i);
  item.addEventListener('onclick',(even)=>{
    item.classList.add('active');
  });
}

  }

}
