import { Component, OnInit } from '@angular/core';
import { CreatePDFService } from '../create-pdf.service';
import {  ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-form-pdfdownload',
  templateUrl: './form-pdfdownload.component.html',
  styleUrls: ['./form-pdfdownload.component.css']
})
export class FormPDFdownloadComponent implements OnInit {
  
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

  displayedColumns: string[] = ['Name', 'birthDate', 'Gender', 'Address','Email','phoneNo','company','course','additionalComment'];
  tabledata:any;
  name:string;
  constructor(private studdata:CreatePDFService) { 
    this.tabledata = this.studdata.studentData;
   
    console.log(this.tabledata);
    
  }

  ngOnInit(): void {
   
  }
  public openPDF(){
    var doc = new jsPDF();
    const pdfTable = this.pdfTable.nativeElement;
   
    doc.fromHTML(pdfTable.innerHTML,8,0);
    
    // Open PDF document in new tab
   
    doc.output('dataurlnewwindow')
  }
  public downloadAsPDF() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;

    doc.fromHTML(pdfTable.innerHTML,8,0, {
      width: 190,
      'elementHandlers': specialElementHandlers
    });

    doc.save('tableToPdf.pdf');
  }

}
