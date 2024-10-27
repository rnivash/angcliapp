// main.ts
import { ApplicationConfig } from '@angular/core';

import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

// Set up providers and configuration using ApplicationConfig
export const appConfig: ApplicationConfig = {
  providers: [ provideRouter(routes, withComponentInputBinding()),
    // other providers can go here
  ]
};

