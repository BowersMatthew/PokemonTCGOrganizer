import { Injectable } from '@angular/core';
import { Deck } from '../../models/Deck';

@Injectable()
export class DeckService{

  decks: Deck[];

  constructor() {
    this.decks = [
      {
        id: 1,
        name: "Test Deck",
        types: ["Grass", "Electric"],
        cards: [
          {
            id: 1,
            name:"card1",
            type:"Electric",
            cardType:"pokemon",
            text:"This is a card",
            abilities: [{name:"ability1", text:"words", effects:["effect1"]}],
            stage:"basic",
            power: "none",
            set: "set 1",
          }],
        description: "Example description of how the deck works."
      },
      {
        id: 2,
        name: "Test Deck 2",
        types: ["Fire", "Electric"],
        cards: [
          {
            id: 1,
            name:"card1",
            type:"Electric",
            cardType:"pokemon",
            text:"This is a card",
            abilities: [{name:"ability1", text:"words", effects:["effect1"]}],
            stage:"basic",
            power: "none",
            set: "set 1"
          }],
          description: "Example description of how the deck works."
      }]
  }

  getDecks(): Deck[] {
    return this.decks;
  }

  addDeck(deck: Deck) {
    this.decks.push(deck);
  }

  removeDeck(id: Number) {
    let i = 0;
    for (; i < this.decks.length; i++) {
      if (this.decks[i].id == id){
        this.decks.splice(i, 1);
      }
    }
  }
}
