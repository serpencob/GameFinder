import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// import {platformBrowser} from '@angular/platform-browser';
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)