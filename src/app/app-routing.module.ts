import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Http404ViewComponent } from './http-404-view/http-404-view.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';

const routes: Routes = [
  { path: 'home', component: WelcomeViewComponent },
  { path: '', component: WelcomeViewComponent },
  { path: '**', component: Http404ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
