import 'core-js';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './src/app/app.module';            // ポイント１

platformBrowserDynamic().bootstrapModule(AppModule);
