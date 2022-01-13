import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ClientesComponent } from '../../clientes/clientes.component';
import { CrearclienteComponent } from '../../clientes/crearcliente/crearcliente.component';
import { VentasComponent } from '../../ventas/ventas.component';
import { VentaxclienteComponent } from '../../reportes/ventaxcliente/ventaxcliente.component';
import { ListaclienteComponent } from '../../reportes/listacliente/listacliente.component';
import { ReportesComponent } from '../../reportes/reportes.component';
import { ConsolidacionComponent } from '../../consolidacion/consolidacion.component';
import { ActulizarclienteComponent } from '../../clientes/actulizarcliente/actulizarcliente.component';
import { EliminarclienteComponent } from '../../clientes/eliminarcliente/eliminarcliente.component';
import { BuscarclienteComponent } from '../../clientes/buscarcliente/buscarcliente.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    ClientesComponent,
    CrearclienteComponent,
    ActulizarclienteComponent,
    BuscarclienteComponent,
    EliminarclienteComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    VentasComponent,
    VentaxclienteComponent,
    ConsolidacionComponent,
  
    
    
  ]
})

export class AdminLayoutModule {}