import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Pagina Principal',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Iniciar Sesión',  icon:'person', class: '' },
    { path: '/table-list', title: 'Productos',  icon:'content_paste', class: '' },
    { path: '/clientes', title: 'Clientes',  icon:'person', class: '' },
    { path: '/ventas', title: 'Ventas',  icon:'bubble_chart', class: '' },
    { path: '/reportes', title: 'Reportes',  icon:'dashboard', class: '' },
    { path: '/consolidacion', title: 'Consolidacion',  icon:'unarchive', class: '' },
   // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
