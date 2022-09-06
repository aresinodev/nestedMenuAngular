import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { INavItem } from '../../models/nav-item.model';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss']
})
export class NestedMenuComponent implements OnChanges {
  @Input()
  items: INavItem[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']?.currentValue) {
      console.log(changes['items']?.currentValue);
    }
  }
}
