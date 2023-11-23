


import * as Sentry from "@sentry/angular-ivy";

import { AppModule } from './app/app.module';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserTracing } from '@sentry/angular-ivy';




Sentry.init({
  dsn: 'https://b06d64f82064604c8635ecce64ed751f@o4506214875856896.ingest.sentry.io/4506214878937088',
  tracesSampleRate: 1.0,
  environment: 'develop',
  integrations: [
    new BrowserTracing({
      tracingOrigins: [],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],
});







platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
