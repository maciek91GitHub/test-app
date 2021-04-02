import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/data-utils/data.service';
import { GlobalElement } from 'src/app/shared/enums';
import { UIUtilsService } from 'src/app/shared/ui-utils/ui-utils.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  @ViewChild('cartCount') cartCount: ElementRef;
  @ViewChild('cartSum') cartSum: ElementRef;

  count: number = 0;
  sum: number = 0;
  chosenCurrency: string;

  constructor (
    private dataService: DataService,
    private uiUtilsService: UIUtilsService
  ) { }

  ngOnInit(): void {
    this.uiUtilsService.addGlobalElement(GlobalElement.CART, this);
  }

  onCheckout () {
    // open full cart view or cart dialog
    console.log('Check out clicked');
  }

  get countText () {
    return `${this.count} st`;
  }

  get sumText () {
    this.chosenCurrency = this.dataService.chosenCurrency;
    return `${this.sum} kr`;
  }

  addToCart (price, quantity, color) {
    this.sum += price;
    this.count += quantity;
  }

}
