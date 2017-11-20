import { Injectable } from '@angular/core';

import { Card } from '../../models/Card';
import { Ability } from '../../models/Ability';

@Injectable()
export class CardService {
  currentID: number = 0;
  cards: Card[];

  constructor() {
    this.retrieveCards();
    let currentID = 0;
    let i = 0;
    for (; i < this.cards.length; i++) {
      if (this.cards[i].id > this.currentID) {
        currentID = this.cards[i].id;
      }
    }
    this.currentID = currentID + 1;
  }

  getCurrentID(){
    return this.currentID;
  }

  getCards() {
    return this.cards;
  }

  retrieveCards() {
    if (localStorage.getItem('PokemonCards') == null) {
      this.cards = [];
    } else {
      this.cards = JSON.parse(localStorage.getItem('PokemonCards'));
    }
    return this.cards;
  }

  addCard(newCard: Card) {
    newCard.id = this.currentID;
    this.currentID++;
    this.cards[this.cards.length] = newCard;

    let cards;
    if (localStorage.getItem('PokemonCards') == null) {
      cards[this.cards.length] = newCard;
      localStorage.setItem('PokemonCards', JSON.stringify(cards));
    } else {
      cards = JSON.parse(localStorage.getItem('PokemonCards'));
      cards[this.cards.length] = newCard;
      localStorage.setItem('PokemonCards', JSON.stringify(cards));
    }
  }

  removeCard(oldCard: Card) {
    let i = 0;
    for (; i < this.cards.length; i++) {
      if (this.cards[i].id == oldCard.id) {
        this.cards.splice(i, 1);
      } else {
        i++;
      }
    }
  }
}
