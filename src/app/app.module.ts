import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './component/card/card.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CatFactEffects } from 'src/ngrx/effects/catFact.effect';
import { catFactReducer } from 'src/ngrx/reducers/catFact.reducer';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ catFact: catFactReducer }, {}),
    EffectsModule.forRoot([CatFactEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
