import { TestBed } from '@angular/core/testing';

import { EmailInfoService } from './email-info.service';

describe('EmailInfoService', () => {
  let service: EmailInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
