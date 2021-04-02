import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data-utils/data.service';
import { UIUtilsService } from 'src/app/shared/ui-utils/ui-utils.service';

@Component({
  selector: 'app-add-to-cart-view',
  templateUrl: './add-to-cart-view.component.html',
  styleUrls: ['./add-to-cart-view.component.less']
})
export class AddToCartViewComponent implements OnInit {

  @Input()
  prices = {
    net: 0,
    gross: 0
  };

  @Input()
  colors: string[] = [];

  constructor(
    private dataService: DataService,
    private uiUtilsService: UIUtilsService
  ) { }

  ngOnInit(): void {
  }

  addToCart(event) {
    event.preventDefault();
    this.uiUtilsService.addToCart(this.prices.net, 1, 'white');
  }

  get netPrice () {
    return `${this.prices?.net || 0} ${this.dataService.chosenCurrency}`
  }

  get grossPrice () {
    return `${this.prices?.gross || 0} ${this.dataService.chosenCurrency}`
  }

}
