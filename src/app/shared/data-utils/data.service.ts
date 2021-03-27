import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataService {

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
