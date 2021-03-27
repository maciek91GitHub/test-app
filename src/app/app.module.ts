import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FilesService } from './shared/utils/files.service';
import { ShowHideDirective } from './show-hide.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainViewComponent,
    ShowHideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
