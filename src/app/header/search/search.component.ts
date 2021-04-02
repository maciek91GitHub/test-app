import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  @ViewChild('searchInput') searchInput: ElementRef;

  // later nice RxJS can be added
  searchResult: Observable<string>;

  constructor() { }

  ngOnInit(): void { }

  onSearchInput () {
    console.log('Search input');
  }

  onSearch () {
    console.log('Search products', this.searchInput.nativeElement.value);
  }

}
