import { Component, OnDestroy, OnInit } from '@angular/core';
import { UIUtilsService } from '../shared/ui-utils/ui-utils.service';

@Component({
  selector: 'app-http-404-view',
  templateUrl: './http-404-view.component.html',
  styleUrls: ['./http-404-view.component.less']
})
export class Http404ViewComponent implements OnInit, OnDestroy {

  constructor(private uiUtilsService: UIUtilsService) { }
  
  ngOnDestroy(): void {
    this.uiUtilsService.showLoading(true);
  }

  ngOnInit(): void {
  }

}
