import { TestBed } from '@angular/core/testing';

import { LibDummyService } from './lib-dummy.service';

describe('LibDummyService', () => {
  let service: LibDummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibDummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
