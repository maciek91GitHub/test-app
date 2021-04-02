import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UIUtilsService } from 'src/app/shared/ui-utils/ui-utils.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.less']
})
export class MainHeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private uiUtilsService: UIUtilsService
  ) { }

  ngOnInit(): void { }

  onClickBanner () {
    if (!this.router.url.includes('/home')) {
      this.uiUtilsService.showLoading(true);
    }
    this.router.navigate(['/home'])
  }

  onClickMenuMobile () {
    // showMenuMobile
  }

}
