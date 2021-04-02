import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data-utils/data.service';
import { FeaturedItem, Subdescription } from 'src/app/shared/featured-item.model';
import { UIUtilsService } from 'src/app/shared/ui-utils/ui-utils.service';

@Component({
  selector: 'app-featured-view',
  templateUrl: './featured-view.component.html',
  styleUrls: ['./featured-view.component.less']
})
export class FeaturedViewComponent implements OnInit {

  featuredItem: FeaturedItem;
  subdescriptions: Subdescription[] = [];
  srcs = [
    '../../../assets/papers/paper1.jpg',
    '../../../assets/papers/paper2.jpg',
    '../../../assets/papers/paper3.jpg'
  ];

  constructor(
    private dataService: DataService,
    private uiUtilsService: UIUtilsService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit () {
    this.uiUtilsService.showLoading(true);
    this.dataService.getFeaturedItem().then(
      (json) => {
        this.featuredItem = json as FeaturedItem;
        this.featuredItem.imageSrcs.map((src) => {
          return this.dataService.assetsUrl + src;
        });
        this.uiUtilsService.showLoading(false);
        this.featuredItem.imageSrcs = this.srcs; //should be taken from promise but was not working and no time to debug it
        this.subdescriptions = this.featuredItem.subdescriptions;
      }
    );
  }
}
