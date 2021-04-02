import { Injectable } from "@angular/core";
import { GlobalElement } from "../enums";

@Injectable({
  providedIn: "root"
})
export class UIUtilsService {

  globalElements = {};
  loadingCounter = 0;

  initializeUIUtilsService (globalElements: any) {
    this.globalElements = globalElements;
  }

  addGlobalElement (key, elementValue) {
    this.globalElements[key] = elementValue;
  }

  getGlobalElement (key) {
    return this.globalElements[key];
  }

  showLoading (isShow) {
    console.log(isShow, this.loadingCounter);
    this.loadingCounter += isShow ? 1 : -1;
    this.globalElements[GlobalElement.LOADING].nativeElement.style.display = this.loadingCounter > 0 ? 'block' : 'none';
  }

  addToCart(price, quantity, color) {
    this.globalElements[GlobalElement.CART].addToCart(price, quantity, color);
  }

}
