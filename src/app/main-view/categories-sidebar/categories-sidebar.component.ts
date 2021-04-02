import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data-utils/data.service';
import { Category } from 'src/app/shared/category.model';
import { UIUtilsService } from 'src/app/shared/ui-utils/ui-utils.service';

@Component({
  selector: 'app-categories-sidebar',
  templateUrl: './categories-sidebar.component.html',
  styleUrls: ['./categories-sidebar.component.less']
})
export class CategoriesSidebarComponent implements OnInit, AfterViewInit {

  categories: Category[];

  constructor(
    private dataService: DataService,
    private uiUtilsService: UIUtilsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit () {
    this.uiUtilsService.showLoading(true);
    this.dataService.getCategories().then(
      (json) => {
        this.categories = json['categories'];
        this.uiUtilsService.showLoading(false);
      }
    );
  }

}
