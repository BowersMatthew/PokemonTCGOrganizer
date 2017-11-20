import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card/card.service';
import { Card } from '../../models/Card';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.css']
})
export class CardsViewComponent implements OnInit {

  cards;

  constructor(
    private cardService: CardService
  ) { }

  ngOnInit() {
    this.cards = this.cardService.getCards();
  }

}
