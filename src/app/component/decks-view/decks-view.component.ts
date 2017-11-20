import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'

import { DeckService } from '../../services/deck/deck.service';
import { Deck } from '../../models/Deck';
import { Ability } from '../../models/Ability';
import { Card } from '../../models/Card';

@Component({
  selector: 'app-decks-view',
  templateUrl: './decks-view.component.html',
  styleUrls: ['./decks-view.component.css']
})
export class DecksViewComponent implements OnInit {

  decks: Deck[];

  constructor(
    private router: RouterModule,
    private deckService: DeckService
  ) { }

  ngOnInit() {
    this.decks = this.deckService.getDecks();
  }

  viewDeck(deck:Deck) {

  }

  removeDeck(id: Number) {
    this.deckService.removeDeck(id);
  }

}
