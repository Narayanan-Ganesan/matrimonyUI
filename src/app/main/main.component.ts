import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  user:User={full_name:'Sanchana',age:24,father_name:'Soundarrajan',dob:
  new Date('2022-06-15'),reg_date:new Date('2022-06-15'),district:'COIMBATORE',property_details:'10 CR',
  horoscope:'CANCER',star:'Cancer',occupation:'Software Engineer Bangalore',
  image:'https://images.pexels.com/photos/1925482/pexels-photo-1925482.jpeg?auto=compress&cs=tinysrgb&w=600'};

  constructor() { }

  ngOnInit(): void {
     // this.user=[
      
    //   {full_name:'Sanchana',age:24,father_name:'XXX',dob:
    //   new Date('2022-06-15'),reg_date:new Date('2022-06-15'),district:'COIMBATORE',property_details:'10 CR',
    //   horoscope:'CANCER',star:'',occupation:'SOFTWARE ENGINEER'},
      
    // ];
  }

}
