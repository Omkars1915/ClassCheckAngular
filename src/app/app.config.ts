import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient ,withFetch} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [ provideClientHydration(),provideHttpClient(),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()]
};
