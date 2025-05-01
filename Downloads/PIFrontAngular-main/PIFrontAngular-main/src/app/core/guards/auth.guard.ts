import { inject } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import { AuthenticationService } from '@core/services/auth.service'

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authenticationService = inject(AuthenticationService)
  const router = inject(Router)
  const currentUser = authenticationService.session

  if (currentUser) return true

  return router.createUrlTree(['/auth/sign-in'], {
    queryParams: { returnUrl: state.url },
  })
}
