import { TestBed } from '@angular/core/testing';

import { PlayschoolStudentService } from './playgroupstudent.service';

describe('StudentService', () => {
  let service: PlayschoolStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayschoolStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
