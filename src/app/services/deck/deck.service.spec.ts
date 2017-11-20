import { TestBed, inject } from '@angular/core/testing';

import { DeckService } from './deck.service';

describe('DeckServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeckServiceService]
    });
  });

  it('should be created', inject([DeckServiceService], (service: DeckServiceService) => {
    expect(service).toBeTruthy();
  }));
});
