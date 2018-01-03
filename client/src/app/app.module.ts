import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomMaterialModule } from './shared/material.module';

import { StoreModule } from '@ngrx/store';
// import { reducers } from './app.reducers';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    CustomMaterialModule,

    // StoreModule.forRoot(reducers, { metaReducers });
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
