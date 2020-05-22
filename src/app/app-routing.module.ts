import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormPDFdownloadComponent } from './form-pdfdownload/form-pdfdownload.component';


const routes: Routes = [
  {
    path:"",
    component:StudentFormComponent
  },
  {
    path:"app-form-pdfdownload",
    component:FormPDFdownloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
