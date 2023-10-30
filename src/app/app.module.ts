import { NgModule } from '@angular/core';

import { ConfiguratorComponent } from './configurator/configurator.component';
import { appComponent } from './app.component'
import { ModuleComponent } from './module/module.component';
import { OptionComponent } from './option/option.component';
import { SectionComponent } from './section/section.component';
import { AtcComponent } from './atc/atc.component'

import { ConfiguratorService } from './services/configurator.service';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
    appComponent,
    ConfiguratorComponent,
    ModuleComponent,
    OptionComponent,
    SectionComponent,
    AtcComponent,
    CategoryComponent
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
