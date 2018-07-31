import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { HeaderTopMenuComponent } from './header-top-menu/header-top-menu.component';
import { HeaderHeaderComponent } from './header-header/header-header.component';
import { MainSlidesComponent } from './main-slides/main-slides.component';
import { MainItem1Component } from './main-item1/main-item1.component';

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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
