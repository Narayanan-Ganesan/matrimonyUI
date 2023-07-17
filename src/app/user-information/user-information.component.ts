import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.less']
})
export class UserInformationComponent implements OnInit {
  
  submitted!:boolean;
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      registerNo: ['', {updateOn: 'change',validators: [Validators.required] }],
      firstName: [''],
      fathersName:[''],
      mothersName:[''],
      martialStatus:[''],
      gender:[''],
      dob:[''],
      age:[''],
      religion:[''],
      caste:[''],
      kulam:[''],
      kovil:[''],
      star:[''],
      horoscope:[''],
      job:[''],
      qualification:[''],
      occupation:[''],
      monthlyincome:[''],
      wrkloc:[''],
      height:[''],
      weight:[''],
      complexion:[''],
      physical:[''],
      livingplace:[''],
      currentdistrict:[''],
      sisdetails:[''],
      brodetails:[''],
      propertyvalue:[''],
      house:[''],
      fatherjob:[''],
      familydetails:[''],
      mobilenum:[''],
      email:[''],
      contatctnum:[''],
      contatctaddrs:[''],
      photo1:[''],
      chevai:[''],
      chevaiPos:[''],
      jathagamstatus:[''],
      regdate:[''],
      contactadress:[''],
      payement:['']



    });
  }


  selectedImage: string | undefined;

  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.getBase64(file).then((result: string | ArrayBuffer | null) => {
      this.selectedImage = result as string;
    });
  }

  getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  }

}

