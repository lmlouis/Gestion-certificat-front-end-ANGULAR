import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCertificatComponent } from './search-certificat.component';

describe('SearchCertificatComponent', () => {
  let component: SearchCertificatComponent;
  let fixture: ComponentFixture<SearchCertificatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCertificatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCertificatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
