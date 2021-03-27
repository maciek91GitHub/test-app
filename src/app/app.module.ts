import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { BadRequestViewComponent } from './bad-request/bad-request.component';
import { FilesService } from './shared/data-utils/files.service';
import { UIUtilsService } from './shared/ui-utils/ui-utils.service';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    BadRequestViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FilesService,
    UIUtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
