import { ElementRef, Injectable } from "@angular/core";
import { UIOptions } from "../ui-options.model";

@Injectable({
  providedIn: "root"
})
export class UIUtilsService {

  globalElements: UIOptions;

  initializeUIUtilsService (globalElements: UIOptions) {
    console.log(globalElements);
    this.globalElements = globalElements;
  }

  showLoading (isShow) {
    console.log(isShow);
    this.globalElements.loadingMask.nativeElement.style.display = isShow ? 'block' : 'none';
  }

}
