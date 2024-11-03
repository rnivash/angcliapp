import { bootstrapApplication } from '@angular/platform-browser';
import { appComponent } from './app/app.component'
import { appConfig } from './app/app.config';

bootstrapApplication(appComponent, appConfig)
.catch(err => console.error(err));
