import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';

const routes: Routes = [
  
  { path: 'home', component: WelcomeViewComponent },
  { path: '**', component: MainViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
