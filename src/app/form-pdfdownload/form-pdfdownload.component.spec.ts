import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPDFdownloadComponent } from './form-pdfdownload.component';

describe('FormPDFdownloadComponent', () => {
  let component: FormPDFdownloadComponent;
  let fixture: ComponentFixture<FormPDFdownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPDFdownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPDFdownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
