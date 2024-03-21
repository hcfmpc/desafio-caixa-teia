/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GaleriaService } from './galeria.service';

describe('Service: Galeria', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GaleriaService]
    });
  });

  it('should ...', inject([GaleriaService], (service: GaleriaService) => {
    expect(service).toBeTruthy();
  }));
});
