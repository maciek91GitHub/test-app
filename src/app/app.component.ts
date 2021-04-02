import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from './shared/data-utils/data.service';
import { GlobalElement } from './shared/enums';
import { UIUtilsService } from './shared/ui-utils/ui-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('loadingMask') loadingMask: ElementRef;

  showMainLoadingElement: boolean;

  constructor (
    private dataService: DataService,
    private uiUtilsService: UIUtilsService
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.dataService.chosenCurrency = 'kr'; // TODO can use localStorage or rely on component

    this.uiUtilsService.addGlobalElement(GlobalElement.LOADING, this.loadingMask);

    // test loading
    this.uiUtilsService.showLoading(true);
    setTimeout(() => {
      this.uiUtilsService.showLoading(false);
    }, 2000);
  }
  
}
