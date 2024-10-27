import { bootstrapApplication } from '@angular/platform-browser';
import { appComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(appComponent, config);

export default bootstrap;
