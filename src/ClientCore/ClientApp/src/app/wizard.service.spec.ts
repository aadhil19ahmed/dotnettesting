import { TestBed, inject } from '@angular/core/testing';

import { WizardService } from './wizard.service';

describe('WizardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WizardService]
    });
  });

  it('should be created', inject([WizardService], (service: WizardService) => {
    expect(service).toBeTruthy();
  }));
});