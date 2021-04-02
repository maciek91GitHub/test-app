import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Http404ViewComponent } from './http-404-view/http-404-view.component';
import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [
  { path: 'home', component: MainViewComponent },
  { path: '', component: MainViewComponent },
  { path: '**', component: Http404ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
