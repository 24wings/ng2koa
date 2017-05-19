import { Component, OnInit,Input,AfterContentInit} from '@angular/core';
import {Http,RequestOptionsArgs} from '@angular/http';

import * as echarts from 'echarts';
import * as moment from 'moment';



@Component({
  selector: 'app-resume-new-page',
  templateUrl: './resume-new-page.component.html',
  styleUrls: ['./resume-new-page.component.css']
})
export class ResumeNewPageComponent implements OnInit ,AfterContentInit{
  keyword='';
  visitorChart:{
    lineChartColors:any[],
    lineChartLabels:any[],
    lineChartOptions:any,
     lineChartLegend:boolean,
   lineChartType:string,
   lineChartData:any[],
   
  }={
    lineChartColors:[{ 
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }],
    lineChartLabels:['2017:05:12','2017:05:13','2017:05:14','2017:05:15','2017:05:16','2017:05:17','2017:05:19'],
    lineChartOptions:{responsive:true},
    lineChartLegend:true,
    lineChartType:'line',
    lineChartData:[ {data: [0,10,20,30,40,50,60,70], label: 'Series A'}]
  }
  /**
   *     public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
   */

 isAdmin=false;
  visitor={
    name:'',
    gender:'男',
    age:18,
    phone:'',
    job:'Web前端',
    fromMsgPlace:'智联',
    comment:'',
    createDt:new Date()
  };
  currentTime = new Date();
  
  startDt:Date=moment().add(-7,'days').toDate();
  endDt:Date=new Date();  
  public lineChartColors:Array<any> = [
    /*{ // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    */
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    /*
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
    */
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 /** 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  */
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  msg:string=''
  visitors=[];
  count=0;

  submit(){
   this.http.post('/web/visitor',this.visitor).subscribe(rtn=>{
     console.log(rtn.json());
   })
    this.visitor={name:'',phone:'',gender:'',age:18,job:'Web前端',fromMsgPlace:'智联',comment:'',createDt:new Date()};
    this.count=2;
    this.msg='感谢你的填写';
    
   var timmer= setInterval(()=>{  
    console.log(this.msg);
     if(this.count==0){
       clearInterval(timmer);
       this.msg='';
      }
     else{
       this.count--;  
    } 
  },1000);
 
}

delVisitor(visitor){ 
  this.http.delete('/web/visitor',{
    body:visitor
  }).subscribe(rtn=>{
    this.showVisitors();
  })
}
ngAfterContentInit() {
  
}

 sperateVisitor(){

   var line:{data:number[],label:string}={data:[],label:'测试'}
   var dateMap = new Map<string,number>();
   this.visitorChart.lineChartLabels=[];

   this.visitors.forEach(visitor=>{
       var date = moment(visitor.createDt).format('YYYY:MM:DD')
      if(dateMap.get(date)){
       dateMap.set(date,dateMap.get(date)+1); 
     }else{
       dateMap.set(date,1);
      
     }
   });
   dateMap.forEach((number,date)=>{
      line.data.push(number);
   this.visitorChart.lineChartLabels.push(date);
  });
    this.visitorChart.lineChartData[0]=line;   
    

 }

  
  showVisitors(){
    this.endDt.setHours(23);
    this.endDt.setMinutes(59);

      this.http.get('/web/visitor',{search:
        {endDt:this.endDt.toISOString(),
          startDt:this.startDt.toISOString()
        }}).subscribe(rtn=>{
      this.visitors=rtn.json().data;
      this.sperateVisitor()
    })
  } 
  ngOnInit() {
    
  }

  alertData(){
    alert(localStorage.getItem('visitors'));
  }



  public dt: Date = new Date();
  public minDate: Date = void 0;
  public events: any[];
  public tomorrow: Date;
  public afterTomorrow: Date;

  public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
    'shortDate'];
  public format: string = this.formats[0];
  public dateOptions: any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened: boolean = false;
 
  public constructor(public http:Http) {
    (this.tomorrow = new Date()).setDate(this.tomorrow.getDate() + 1);
    (this.afterTomorrow = new Date()).setDate(this.tomorrow.getDate() + 2);
    (this.minDate = new Date()).setDate(this.minDate.getDate() - 1000);
  
  }
 
  public getDate(): number {
    return this.startDt && this.dt.getTime() || new Date().getTime();
  }
 
  public today(): void {
    this.dt = new Date();
  }
 
  public d20090824(): void {
    this.dt = moment('2009-08-24', 'YYYY-MM-DD')
      .toDate();
  }
 

 
  // todo: implement custom class cases
  public getDayClass(date: any, mode: string): string {
    if (mode === 'day') {
      let dayToCheck = new Date(date).setHours(0, 0, 0, 0);
 
      for (let event of this.events) {
        let currentDay = new Date(event.date).setHours(0, 0, 0, 0);
 
        if (dayToCheck === currentDay) {
          return event.status;
        }
      }
    }
 
    return '';
  }

 


}
