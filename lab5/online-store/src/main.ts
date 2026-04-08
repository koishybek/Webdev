import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { AppComponent } from './app/app';

const appConfig: ApplicationConfig = {
    providers: [provideZonelessChangeDetection()]
};

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
