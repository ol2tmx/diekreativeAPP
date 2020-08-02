import { TestBed } from '@angular/core/testing';

import { RSSReaderService } from './rssreader.service';

describe('RSSReaderService', () => {
  let service: RSSReaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RSSReaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
