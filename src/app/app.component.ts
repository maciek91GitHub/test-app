import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { UIOptions } from './shared/ui-options.model';
import { UIUtilsService } from './shared/ui-utils/ui-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('loadingMask') loadingMask: ElementRef;

  showMainLoadingElement: boolean;

  constructor (private uiUtilsService: UIUtilsService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const uiOptions = new UIOptions();
    uiOptions.loadingMask = this.loadingMask;
    this.uiUtilsService.initializeUIUtilsService(uiOptions);

    // test loading
    setTimeout(() => {
      this.uiUtilsService.showLoading(false);
    }, 2000);
  }
  
}
