import { Injectable } from "@angular/core";
import { AppComponent } from "src/app/app.component";

@Injectable({
  providedIn: "root"
})
export class DataService {

  private _chosenCurrency: string = 'kr';

  get assetsUrl () {
    return `../../../assets/`;
  }

  get chosenCurrency () {
    return this._chosenCurrency;
  }

  set chosenCurrency (chosenCurrency) {
    this._chosenCurrency = chosenCurrency;
  }

  // simulate getting data from API
  async getCategories() {
    return fetch("../../../assets/mock-data/categories.json")
    .then(response => new Promise(resolve => setTimeout(
      () => resolve(response.json()),
      1000 // add test server delay
    )))
    .then(categoriesJson => {
      return categoriesJson;
    });
  }

  async getFeaturedItem() {
    return fetch("../../../assets/mock-data/products.json")
    .then(response => new Promise(resolve => setTimeout(
      () => resolve(response.json()),
      1000 // add test server delay
    )))
    .then(categoriesJson => {
      return categoriesJson;
    });
  }
}
