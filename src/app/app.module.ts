import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DecksViewComponent } from './component/decks-view/decks-view.component';

import { CardsViewComponent } from './component/cards-view/cards-view.component';
import { CardDetailViewComponent } from './component/card-detail-view/card-detail-view.component';
import { NewCardViewComponent } from './component/new-card-view/new-card-view.component'


import { DeckService } from './services/deck/deck.service';
import { CardService } from './services/card/card.service';

const appRoutes: Routes = [
  {path: '', component: DecksViewComponent},
  //{path: '', redirectTo: '/decks', pathMatch: 'full'},
  {path: 'cards', component: CardsViewComponent},
  {path: 'newCard', component: NewCardViewComponent},
  {path: '**', component: PageNotFoundComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DecksViewComponent,
    CardsViewComponent,
    CardDetailViewComponent,
    NewCardViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [
    DeckService,
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
