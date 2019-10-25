export interface RouteProps {
  component: Function;
  isAuthenticated: boolean;
  to?: string;
  [rest: string]: any;
}
