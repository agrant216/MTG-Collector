import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollectorModule } from './features/collector/collector.module';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import { CollectorComponent } from './features/collector/collector.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from './features/shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavMenuComponent } from './component/nav-menu/nav-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { NavService } from './features/shared/services/nav.service';

@NgModule({
  declarations: [
    AppComponent,
    // StoreModule.forRoot(reducers),
    // StoreDevtoolsModule.instrument(),
    // EffectsModule.forRoot([]),
    // StoreRouterConnectingModule.forRoot(),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ToolbarComponent,
    SideNavComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CollectorModule,
    SharedModule,
    MatSidenavModule,
    MatTreeModule,
    MatIconModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
