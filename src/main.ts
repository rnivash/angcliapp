import { bootstrapApplication } from '@angular/platform-browser';
import { appComponent } from './app/app.component'
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(appComponent, {
    providers: [provideRouter(routes, withComponentInputBinding())]})
.catch(err => console.error(err));
