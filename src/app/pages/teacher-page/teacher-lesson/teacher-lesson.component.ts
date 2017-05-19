import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-lesson',
  templateUrl: './teacher-lesson.component.html',
  styleUrls: ['./teacher-lesson.component.css']
})
export class TeacherLessonComponent implements OnInit {
   lessons=[{name:'HTML',createDt:new Date(2017,4,5)},
   {name:'CSS',createDt:new Date(2017,5,5)},
   {name:'Javascript',createDt:new Date(2017,6,5)},
   {name:'jQuery',createDt:new Date(2017,7,5)},
   {name:'Bootstrap',createDt:new Date(2017,8,9)},
   {name:'Nodejs',createDt:new Date(2017,9,10)}]
  selectedLesson=this.lessons[0];
  selectLesson(lesson){
    this.selectedLesson=lesson;
  }

  addLesson(lessonName){
    this.lessons.push({name:lessonName,createDt:new Date()});
  }
  constructor() { }

  ngOnInit() {
  }

}
