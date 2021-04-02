import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.less']
})
export class GalleryViewComponent implements OnInit {

  @Input()
  imageSrcs: string[] = [];

  selectedImageSrc: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedImageSrc = this.imageSrcs ? this.imageSrcs[0] : '';
  }

  onImageSelect (event) {
    this.selectedImageSrc = event.target.getAttribute('src');
  }

}
