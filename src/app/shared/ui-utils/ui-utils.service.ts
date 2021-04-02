import { Injectable } from "@angular/core";
import { GlobalElement } from "../enums";

@Injectable({
  providedIn: "root"
})
export class UIUtilsService {

  globalElements = {};

  initializeUIUtilsService (globalElements: any) {
    this.globalElements = globalElements;
  }

  showLoading (isShow) {
    this.globalElements[GlobalElement.LOADING].nativeElement.style.display = isShow ? 'block' : 'none';
  }

  addGlobalElement (key, elementValue) {
    this.globalElements[key] = elementValue;
  }

  getGlobalElement (key) {
    return this.globalElements[key];
  }

}
