import { Component, Input } from '@angular/core';
import { INavItem } from '../../models/nav-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input()
  children?: INavItem[];

  @Input()
  item?: INavItem;
}
