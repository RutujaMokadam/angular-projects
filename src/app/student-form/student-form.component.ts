import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import { CreatePDFService } from '../create-pdf.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentform =this.studform.group({
    firstName: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    middelName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: ['', Validators.required],
    gender: ['', Validators.required],
    address: this.studform.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    email:['', Validators.required],
    phoneNo:['', Validators.required],
    company:['', Validators.required],
    course:['', Validators.required],
    additionalComment:['']
  });
  datetoggel:boolean = false;
  constructor(private studform : FormBuilder, private studdata:CreatePDFService, private router:Router) { 
    
  }

  ngOnInit() {
 
    }
    registarstudent(studentdata){
      if(studentdata.value.birthDate >= new Date()){
          this.datetoggel = true;
          alert("Enter Valid Details")
      }else{
      console.log(studentdata.birthDate);
      
      this.studdata.studentData = studentdata.value;
      //console.log(this.studdata.studentData);
      this.router.navigate(['/app-form-pdfdownload']);
    }
    }

}
