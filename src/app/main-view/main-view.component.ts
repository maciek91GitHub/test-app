import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UIUtilsService } from '../shared/ui-utils/ui-utils.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.less']
})
export class MainViewComponent implements OnInit, AfterViewInit {

  constructor(private uiUtilsService: UIUtilsService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // test loading
    setTimeout(() => {
      this.uiUtilsService.showLoading(false);
    }, 2000);
  }

}
