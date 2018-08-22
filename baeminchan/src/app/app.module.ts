import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

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
  MainItem3Component,
  MainItem4Component,
  MainItem5Component,
  MainFooterComponent,
  BasketPopupComponent,
  ItemListComponent,
  ItemListMainComponent,
  SigninComponent,
  SignupComponent,
  ItemDetailComponent,
  ItemDetailMainComponent,
  CartComponent
} from './pages';

import { ScrollerComponent } from './pages/scroller/scroller.component';
import { CurrencyPipe } from './module/currency.pipe';

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
    SignupComponent,
    ItemDetailComponent,
    ItemDetailMainComponent,
    ScrollerComponent,
    CurrencyPipe,
    CartComponent,
    MainItem3Component,
    MainItem4Component,
    MainItem5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
