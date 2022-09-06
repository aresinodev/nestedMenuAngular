export interface INavItem {
  id: number;
  name: string;
  childrens?: INavItem[];
}
