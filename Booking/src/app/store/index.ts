import type { ActionReducerMap } from '@ngrx/store'
export * from './constants'

import {
  authenticationReducer,
  type AuthenticationState,
} from './authentication/authentication.reducer'

export type RootReducerState = {
  authentication: AuthenticationState
}

export const rootReducer: ActionReducerMap<RootReducerState> = {
  authentication: authenticationReducer,
}
