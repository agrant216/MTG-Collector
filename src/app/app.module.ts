import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollectorModule } from './features/collector/collector.module';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { CollectorComponent } from './features/collector/collector.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SideNavComponent,
    CollectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CollectorModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
