import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {

  private _chosenCurrency: string;

  get chosenCurrency () {
    return this._chosenCurrency;
  }

  set chosenCurrency (chosenCurrency) {
    this._chosenCurrency = chosenCurrency;
  }

  // simulate getting data from API
  async getData() {
    return fetch("../../assets/mock/files.json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      });
  }
}
