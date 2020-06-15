import { TestBed, inject } from '@angular/core/testing';

import { GitOperationsService } from './git-operations.service';

describe('GitOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitOperationsService]
    });
  });

  it('should be created', inject([GitOperationsService], (service: GitOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
