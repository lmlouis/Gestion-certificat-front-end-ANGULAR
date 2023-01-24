import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCertificatComponent } from './edit-certificat.component';

describe('EditCertificatComponent', () => {
  let component: EditCertificatComponent;
  let fixture: ComponentFixture<EditCertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCertificatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
