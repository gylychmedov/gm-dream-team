export interface INavLink {
  name: string;
  route: string;
  sub?: INavLink[];
}
