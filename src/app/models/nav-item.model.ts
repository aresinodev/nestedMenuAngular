export interface INavItem {
  id: number;
  name: string;
  children?: INavItem[];
}
