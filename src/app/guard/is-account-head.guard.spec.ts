import { TestBed } from '@angular/core/testing';

import { IsAccountHeadGuard } from './is-account-head.guard';

describe('IsAccountHeadGuard', () => {
  let guard: IsAccountHeadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAccountHeadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
