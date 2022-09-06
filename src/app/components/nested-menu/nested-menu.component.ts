import { Component, Input } from '@angular/core';
import { INavItem } from '../../models/nav-item.model';

@Component({
  selector: 'app-nested-menu',
  templateUrl: './nested-menu.component.html',
  styleUrls: ['./nested-menu.component.scss']
})
export class NestedMenuComponent {
  @Input()
  items?: INavItem[];
}
