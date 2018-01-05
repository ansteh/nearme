import { TestBed, inject } from '@angular/core/testing';

import { DealsMapService } from './deals-map.service';

describe('DealsMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealsMapService]
    });
  });

  it('should be created', inject([DealsMapService], (service: DealsMapService) => {
    expect(service).toBeTruthy();
  }));
});
