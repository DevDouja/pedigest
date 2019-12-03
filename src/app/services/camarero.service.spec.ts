import { TestBed } from '@angular/core/testing';

import { CamareroService } from './camarero.service';

describe('CamareroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamareroService = TestBed.get(CamareroService);
    expect(service).toBeTruthy();
  });
});
