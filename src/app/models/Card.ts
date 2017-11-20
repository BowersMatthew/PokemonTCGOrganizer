import { Ability } from './Ability'

export interface Card {
  id: number;
  name: String;
  type: String;
  cardType: String;
  text: String;
  abilities: Ability[];
  stage: String;
  power: String;
  set: String;
}
