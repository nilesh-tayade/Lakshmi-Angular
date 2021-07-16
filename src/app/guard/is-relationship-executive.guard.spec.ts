import { TestBed } from '@angular/core/testing';

import { IsRelationshipExecutiveGuard } from './is-relationship-executive.guard';

describe('IsRelationshipExecutiveGuard', () => {
  let guard: IsRelationshipExecutiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsRelationshipExecutiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
