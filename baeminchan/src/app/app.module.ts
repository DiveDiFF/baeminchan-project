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
  MainFooterComponent,
  BasketPopupComponent,
  ItemListComponent,
  ItemListMainComponent,
  SigninComponent,
  SignupComponent,
  ItemDetailComponent,
  ItemDetailMainComponent,
} from './pages';

import { ScrollerComponent } from './pages/scroller/scroller.component';

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
    ScrollerComponent
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
