import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { HeaderComponent } from './header/header.component';
import { FullmenuComponent } from './fullmenu/fullmenu.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [LeftmenuComponent, HeaderComponent, FullmenuComponent],
  exports: [LeftmenuComponent, FullmenuComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
