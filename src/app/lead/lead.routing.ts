import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeadComponent} from './lead.component';
import {ViewleadComponent} from './viewlead/viewlead.component';
import {LeaddataComponent} from './viewlead/leaddata/leaddata.component';
import {AddleadComponent} from './addlead/addlead.component';

export const routes: Routes = [
  { path: '', redirectTo: 'view-leads', pathMatch: 'full' },
  {
    path: '', component: LeadComponent, children: [
      {
        path: 'view-leads', component: ViewleadComponent,
      },
      {
        path: 'view-leads/lead-data/:leadId', component: LeaddataComponent,
      },
      {
        path: 'add-lead', component: AddleadComponent,
      }
    ]
  }
];

export const LeadRouting: ModuleWithProviders = RouterModule.forChild(routes);

