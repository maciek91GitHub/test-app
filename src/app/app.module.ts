import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { Http404ViewComponent } from './http-404-view/http-404-view.component';
import { DataService } from './shared/data-utils/data.service';
import { UIUtilsService } from './shared/ui-utils/ui-utils.service';
import { SecondaryHeaderComponent } from './header/secondary-header/secondary-header.component';
import { SearchComponent } from './header/search/search.component';
import { CartComponent } from './header/cart/cart.component';
import { MainViewComponent } from './main-view/main-view.component';
import { CategoriesSidebarComponent } from './main-view/categories-sidebar/categories-sidebar.component';
import { FeaturedViewComponent } from './main-view/featured-view/featured-view.component';
import { FooterViewComponent } from './footer/footer-view/footer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondaryHeaderComponent,
    SearchComponent,
    MainHeaderComponent,
    Http404ViewComponent,
    CartComponent,
    MainViewComponent,
    CategoriesSidebarComponent,
    FeaturedViewComponent,
    FooterViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    UIUtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
