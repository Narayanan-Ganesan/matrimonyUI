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
      // Add other form controls and validators
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

