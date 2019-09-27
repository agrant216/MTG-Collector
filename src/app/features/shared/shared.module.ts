import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { NavMenuItemComponent } from './nav-menu-item/nav-menu-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [NavMenuItemComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    NavMenuItemComponent,
    MatListModule
  ],
})
export class SharedModule { }
