import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 컴포넌트 임포트

import {
  MainComponent,
  ItemListComponent,
} from './pages';

// 라우트 구성
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: MainComponent },
  { path: 'itemlist', component: ItemListComponent },
];

@NgModule({
  /* 모든 라우트 구성을 포함한 모듈을 생성하고 라우팅 모듈에 추가 */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
