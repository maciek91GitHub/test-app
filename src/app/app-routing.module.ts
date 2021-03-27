import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadRequestViewComponent } from './bad-request/bad-request.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';

const routes: Routes = [
  { path: 'home', component: WelcomeViewComponent },
  { path: '**', component: BadRequestViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
