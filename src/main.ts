import { bootstrapApplication } from '@angular/platform-browser';
import { appComponent } from './app/app.component'

bootstrapApplication(appComponent, {providers: []})
.catch(err => console.error(err));
