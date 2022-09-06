import { Component } from '@angular/core';
import { IDefaultItem } from './models/default-item.model';
import { buildingMenu } from './utils/utils';
import { INavItem } from './models/nav-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: IDefaultItem[] = [
    {
      "name": "Bebidas",
      "id": 1,
      "parentId": null
    },
    {
      "name": "Comidas",
      "id": 2,
      "parentId": null
    },
    {
      "name": "Limpieza",
      "id": 3,
      "parentId": null
    },
    {
      "name": "Gaseosas",
      "id": 100,
      "parentId": 1
    },
    {
      "name": "Con Alcohol",
      "id": 1010,
      "parentId": 100
    },
    {
      "name": "Sin Alcohol",
      "id": 1009,
      "parentId": 100
    },
    {
      "name": "Con Azúcar",
      "id": 101,
      "parentId": 1009
    },
    {
      "name": "Sin Azucar",
      "id": 103,
      "parentId": 1009
    },
    {
      "name": "Jugos",
      "id": 189,
      "parentId": 103
    },
    {
      "name": "Energizantes",
      "id": 1222,
      "parentId": 103
    },
    {
      "name": "Fruta",
      "id": 1223,
      "parentId": 1222
    },
    {
      "name": "Sin grasa",
      "id": 12231231,
      "parentId": 1223
    }
  ];
  public navMenu: INavItem[];

  constructor() {
    this.navMenu = buildingMenu(this.items);
  }
}
