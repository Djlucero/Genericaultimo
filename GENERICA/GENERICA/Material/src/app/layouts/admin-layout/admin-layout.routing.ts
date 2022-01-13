import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { VentasComponent } from '../../ventas/ventas.component';
import { ClientesComponent } from '../../clientes/clientes.component';
import { CrearclienteComponent } from '../../clientes/crearcliente/crearcliente.component';
import { BuscarclienteComponent } from '../../clientes/buscarcliente/buscarcliente.component';
import { ReportesComponent } from '../../reportes/reportes.component';
import { ActulizarclienteComponent } from '../../clientes/actulizarcliente/actulizarcliente.component';
import { EliminarclienteComponent } from '../../clientes/eliminarcliente/eliminarcliente.component';
import { VentaxclienteComponent } from '../../reportes/ventaxcliente/ventaxcliente.component';
import { ListaclienteComponent } from '../../reportes/listacliente/listacliente.component';
import { ConsolidacionComponent } from '../../consolidacion/consolidacion.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: '',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'clientes',       component: ClientesComponent },
    { path: 'crearcliente',   component: CrearclienteComponent },
    { path: 'actulizarcliente',   component: ActulizarclienteComponent },
    { path: 'eliminarcliente',   component: EliminarclienteComponent },
    { path: 'buscarcliente',   component: BuscarclienteComponent },
    { path: 'ventas',   component: VentasComponent },
    { path: 'reportes',   component: ReportesComponent },
    { path: 'ventaxcliente',   component: VentaxclienteComponent },
    { path: 'listacliente',   component: ListaclienteComponent },
    { path: 'consolidacion',   component: ConsolidacionComponent },
];