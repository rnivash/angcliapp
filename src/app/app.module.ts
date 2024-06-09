import { NgModule } from '@angular/core';
import { appComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    appComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [  ],
  bootstrap: [
    appComponent
  ]
})
export class AppModule 
{ 
  
}
