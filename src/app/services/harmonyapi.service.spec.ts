import { TestBed } from '@angular/core/testing';

import { HarmonyapiService } from './harmonyapi.service';

describe('HarmonyapiService', () => {
  let service: HarmonyapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarmonyapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
