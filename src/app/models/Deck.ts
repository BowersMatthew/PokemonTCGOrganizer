import { Card } from './Card'

export interface Deck {
  id: Number;
  name: String;
  types: String[];
  cards: Card[];
  description: String;
}
