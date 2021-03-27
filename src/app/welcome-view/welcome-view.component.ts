import { AfterViewInit, Component, OnInit } from '@angular/core';
import { UIUtilsService } from '../shared/ui-utils/ui-utils.service';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.less']
})
export class WelcomeViewComponent implements OnInit, AfterViewInit {

  constructor(private uiUtilsService: UIUtilsService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // test loading
    setTimeout(() => {
      this.uiUtilsService.showLoading(false);
    }, 2000);
  }

}
