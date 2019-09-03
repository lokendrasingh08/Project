import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadComponent } from './lead.component';
import { ViewleadComponent } from './viewlead/viewlead.component';
import { LeaddataComponent } from './viewlead/leaddata/leaddata.component';
import { AddleadComponent } from './addlead/addlead.component';
import {LeadRouting} from './lead.routing';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatPaginatorModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [LeadComponent, ViewleadComponent, LeaddataComponent, AddleadComponent],
  imports: [
    LeadRouting,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class LeadModule { }
