import { TestBed } from '@angular/core/testing';

import { PamatroService } from './pamatro.service';

describe('PamatroService', () => {
  let service: PamatroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PamatroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
