import { NgModule } from '@angular/core';

import { ConfiguratorComponent } from './configurator/configurator.component';
import { appComponent } from './app.component'
import { ModuleComponent } from './module/module.component';
import { OptionComponent } from './option/option.component';
import { SectionComponent } from './section/section.component';
import { AtcComponent } from './atc/atc.component'

import { ConfiguratorService } from './configurator.service';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    appComponent,
    ConfiguratorComponent,
    ModuleComponent,
    OptionComponent,
    SectionComponent,
    AtcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ConfiguratorService,
   
  ],
  bootstrap: [
    appComponent
  ]
})
export class AppModule 
{ 
  
}
