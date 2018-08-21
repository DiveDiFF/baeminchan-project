import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClickOutSideDirective } from './signup/click-outside.directive';


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
    SignupComponent,
    ClickOutSideDirective,

  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
=======
    AppRoutingModule,
    ReactiveFormsModule
>>>>>>> 38a541ffc3e90db51291790ba87bfb4a8e739c29
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
