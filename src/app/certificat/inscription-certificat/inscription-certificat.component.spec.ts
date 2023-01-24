import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCertificatComponent } from './inscription-certificat.component';

describe('InscriptionCertificatComponent', () => {
  let component: InscriptionCertificatComponent;
  let fixture: ComponentFixture<InscriptionCertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionCertificatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
