import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-new-visitor',
  templateUrl: './new-visitor.component.html',
  styleUrls: ['./new-visitor.component.css']
})
export class NewVisitorComponent implements OnInit {
visitor={
  name:'test',
  age:17,
  createDt:new Date().toISOString(),
  gender:'男',
  comment:'注释', 
  fromMsgPlace:'测试',
  phone:'测试',
  job:'测试' 
}
  constructor(public http:Http) { }

  ngOnInit() {
  }
  newVisitor(){
    this.http.post('/web/visitor',this.visitor).subscribe(rtn=>{
      if(rtn.json().ok){
        alert('p')
      }
    })
  }
}
