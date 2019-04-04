import { Injectable, Inject } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SessionDataService, SessionConfig, SESSION_CONFIG } from 'pip-clients-shell';

import * as fromSignupActions from './signup.actions';

@Injectable()
export class SignupEffects {
    constructor(
        private actions$: Actions,
        @Inject(SESSION_CONFIG) private config: SessionConfig,
        private localStorageService: LocalStorageService,
        private sessionDataService: SessionDataService,
    ) { }

    @Effect() SessionSignupInit$: Observable<Action> = this.actions$.pipe(
        ofType(
            fromSignupActions.SignupActionType.SignupInit,
            fromSignupActions.SignupActionType.SignupAbort
            ),
        switchMap((action: fromSignupActions.SignupInitAction) => {
            if (action.type === fromSignupActions.SignupActionType.SignupInit) {
                return this.sessionDataService.signup(action.payload)
                    .pipe(
                        map(data => new fromSignupActions.SignupSuccessAction(data)),
                        catchError(error => of(new fromSignupActions.SignupFailureAction(error)))
                    );
            } else {
                return of();
            }
        })
    );

    @Effect({ dispatch: false }) SessionSignupSuccess$: Observable<void> = this.actions$.pipe(
        ofType(fromSignupActions.SignupActionType.SignupSuccess),
        map((action: fromSignupActions.SignupSuccessAction) => {
            this.localStorageService.set(this.config.lsSessionKey, action.payload);
            window.location.href = window.location.origin + this.config.autorizedUrl;
        })
    );
}
