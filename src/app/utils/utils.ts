import {IDefaultItem} from "../models/default-item.model";
import {INavItem} from "../models/nav-item.model";

export function buildingMenu(items: IDefaultItem[]): INavItem[] {
  let navMenu: INavItem[] = [];

  items.forEach(optionMenu => {
    if (optionMenu?.parentId) {
      navMenu.forEach(item => {
        const newItem = generateItem(item, optionMenu);

        if (newItem) {
          navMenu = [
            ...navMenu.filter(item => item?.id !== newItem?.id),
            newItem
          ].sort((a, b) => a.id - b.id);

          return;
        }
      });
    } else {
      const existOption = navMenu.find(item => item?.id === optionMenu?.id);

      if (!existOption) {
        const { parentId, ...rest } = optionMenu;
        navMenu = [
          ...navMenu,
          rest
        ];
      }
    }
  });

  return navMenu;
}

export function generateItem(menuItem: INavItem, children: IDefaultItem): INavItem | null {
  if (menuItem.id === children?.parentId) {
    return {
      ...menuItem,
      childrens: [
        ...menuItem?.childrens || [],
        children
      ]
    };
  } else {
    if (menuItem?.childrens?.length) {
      for (let i = 0; i < menuItem.childrens.length; i++) {
        const subItem = menuItem.childrens[i];
        const structure = generateItem(subItem, children);

        if (structure) {
          i = menuItem.childrens.length;

          return {
            ...menuItem,
            childrens: [
              ...menuItem?.childrens.filter(item => item.id !== structure.id) || [],
              structure
            ]
          };
        }
      }
    }
  }

  return null;
}
