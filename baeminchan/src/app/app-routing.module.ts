import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 컴포넌트 임포트

import {
  MainComponent,
  ItemListComponent,
  ItemListMainComponent,
  ItemListMain2Component,
  ItemListMain3Component,
  ItemListMain4Component,
  ItemListMain5Component,
  ItemListMain6Component,
  ItemListMain7Component,
  SigninComponent,
  SignupComponent,
  ItemDetailComponent,
  CartComponent,
  SearchComponent
} from './pages';

// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: MainComponent },
  { path: 'itemlist', component: ItemListComponent,
    children: [
      { path: '', component: ItemListMainComponent, pathMatch: 'full' },
      { path: 'side-dish', component: ItemListMainComponent },
      { path: 'soup', component: ItemListMain2Component },
      { path: 'main-courses', component: ItemListMain3Component },
      { path: 'kids', component: ItemListMain4Component },
      { path: 'set-of-side', component: ItemListMain5Component },
      { path: 'fresh', component: ItemListMain6Component },
      { path: 'refreshment', component: ItemListMain7Component },
    ]
  }
  { path: 'login', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'itemdetail/:id', component: ItemDetailComponent },
  { path: 'cart', component: CartComponent},
  { path: 'search/:target', component: SearchComponent}
];

@NgModule({
  /* 모든 라우트 구성을 포함한 모듈을 생성하고 라우팅 모듈에 추가 */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
