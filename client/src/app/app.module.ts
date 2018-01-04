import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomMaterialModule } from './shared/material.module';

import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from '@ngrx/store';
// import { reducers } from './app.reducers';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DealsComponent } from './deals/deals.component';
import { DealCardComponent } from './deals/deal-card/deal-card.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DealsComponent,
    DealCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    CustomMaterialModule,
    FlexLayoutModule,

    // StoreModule.forRoot(reducers, { metaReducers });
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
