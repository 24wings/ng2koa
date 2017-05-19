import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit {
  hideSidebar=false;
  selectedService="main";
  selectService(service){
    console.log(service);
    this.selectedService=service
  }
  constructor() { }

  ngOnInit() {
  }

}
