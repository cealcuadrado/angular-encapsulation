import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { EmulatedEncapsulationComponent } from './shared/emulated-encapsulation/emulated-encapsulation.component';
import { NoEncapsulationComponent } from './shared/no-encapsulation/no-encapsulation.component';
import { ShadowdomEncapsulationComponent } from './shared/shadowdom-encapsulation/shadowdom-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EmulatedEncapsulationComponent,
    NoEncapsulationComponent,
    ShadowdomEncapsulationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
