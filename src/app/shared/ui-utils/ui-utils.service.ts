import { Injectable } from "@angular/core";
import { UIOptions } from "../ui-options.model";

@Injectable({
  providedIn: "root"
})
export class UIUtilsService {

  globalElements: UIOptions;

  initializeUIUtilsService (globalElements: UIOptions) {
    this.globalElements = globalElements;
  }

  showLoading (isShow) {
    this.globalElements.loadingMask.nativeElement.style.display = isShow ? 'block' : 'none';
  }

}
