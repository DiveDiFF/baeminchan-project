import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';

import {
  HeaderComponent,
  MenuComponent,
  MainComponent,
  FooterComponent,
  ContainerComponent,
  HeaderTopMenuComponent,
  HeaderHeaderComponent,
  MainSlidesComponent,
  MainItem1Component,
  MainItem2Component,
  MainFooterComponent,
  BasketPopupComponent,
  ItemListComponent,
  ItemListMainComponent,
} from './pages';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    FooterComponent,
    ContainerComponent,
    HeaderTopMenuComponent,
    HeaderHeaderComponent,
    MainSlidesComponent,
    MainItem1Component,
    MainItem2Component,
    MainFooterComponent,
    BasketPopupComponent,
    ItemListComponent,
    ItemListMainComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
