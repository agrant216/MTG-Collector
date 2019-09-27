import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { CollectorComponent } from './collector.component';

@NgModule({
  declarations: [
    CollectorComponent,
    HeaderBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CollectorComponent
  ]
})
export class CollectorModule { }
