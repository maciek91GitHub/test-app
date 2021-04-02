import { ElementRef } from "@angular/core";
import { CartComponent } from "../header/cart/cart.component";

/**
 * Model that stores all references to shared ui elements
 */
export class UIOptions {
  loadingMask: ElementRef;
  cart: CartComponent;
}
