import { TestBed } from '@angular/core/testing';

import { SearchCertificatService } from './search-certificat.service';

describe('SearchCertificatService', () => {
  let service: SearchCertificatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCertificatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
