import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core'
import {
  provideRouter,
  withInMemoryScrolling,
  type InMemoryScrollingFeature,
  type InMemoryScrollingOptions,
} from '@angular/router'
import { IMAGE_CONFIG } from '@angular/common'

import { routes } from './app.routes'
import { provideStore } from '@ngrx/store'
import { rootReducer } from './store'
import { AuthenticationEffects } from './store/authentication/authentication.effects'
import { provideEffects } from '@ngrx/effects'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http'
import { FakeBackendProvider } from './helpers/fake-backend'
import { JwtInterceptor } from './helpers/jwt.interceptor'
import { ErrorInterceptor } from './helpers/error.interceptor'

// Scroll
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
}

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig)

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, inMemoryScrollingFeature),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideStore(rootReducer),
    provideEffects(AuthenticationEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    FakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
}
