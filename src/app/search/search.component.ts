import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  advancesearchform!:FormGroup;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {

    this.advancesearchform=this.formbuilder.group(
      {
        gender: [''],
        agefrom:[''],
        ageTo:[''],
        horoscope:[''],
        recentprofile:[''],
        district:[''],
        job:[''],
        martialstatus:['']

      }
    );
  }


}
