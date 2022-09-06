import { IDefaultItem } from '../models/default-item.model';
import { INavItem } from '../models/nav-item.model';

export function buildingMenu(items: IDefaultItem[]): INavItem[] {
  let navMenu: INavItem[] = [];

  items.forEach(optionMenu => {
    if (optionMenu?.parentId) {
      navMenu.forEach(item => {
        const newItem = generateItem(item, optionMenu);

        if (newItem) {
          navMenu = [
            ...navMenu
            .filter(item => item?.id !== newItem?.id),
            newItem
          ].sort((a, b) => a.id - b.id);

          return;
        }
      });
    } else {
      const existOption = navMenu
      .find(item => item?.id === optionMenu?.id);

      if (!existOption) {
        const {
          parentId,
          ...restParams
        } = optionMenu;

        navMenu = [
          ...navMenu,
          restParams
        ];
      }
    }
  });

  return navMenu;
}

export function generateItem(
  menuItem: INavItem, child: IDefaultItem
): INavItem | null {
  if (menuItem.id === child?.parentId) {
    return {
      ...menuItem,
      children: [
        ...menuItem?.children || [],
        child
      ]
    };
  } else {
    if (menuItem?.children?.length) {
      for (let i = 0; i < menuItem.children.length; i++) {
        const subItem = menuItem.children[i];
        const node = generateItem(subItem, child);

        if (node) {
          i = menuItem.children.length;

          return {
            ...menuItem,
            children: [
              ...menuItem?.children
              .filter(item => item.id !== node.id) || [],
              node
            ]
          };
        }
      }
    }
  }

  return null;
}
