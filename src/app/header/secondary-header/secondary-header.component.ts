import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UIUtilsService } from 'src/app/shared/ui-utils/ui-utils.service';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.less']
})
export class SecondaryHeaderComponent implements OnInit {

  constructor(private router: Router, private uiUtilsService: UIUtilsService) { }

  ngOnInit(): void {
  }

  onClick404 () {
    this.router.navigate(['/404-or-any-non-existent-link'])
  }

  onRedirect (event) {
    const buttonLabel = event.target.getAttribute('aria-label') || event.target.parentNode.getAttribute('aria-label');
    console.log('Redirect to ', buttonLabel);
    if (!this.router.url.includes('/home')) {
      this.uiUtilsService.showLoading(true);
    }
    this.router.navigate(['/home'])
  }

}
