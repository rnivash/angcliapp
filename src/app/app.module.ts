import { NgModule } from '@angular/core';
import { appComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    appComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [
    appComponent
  ]
})
export class AppModule 
{ 
  
}
