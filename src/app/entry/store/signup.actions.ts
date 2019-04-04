import { Action } from '@ngrx/store';
import { Session, SignupUser } from 'pip-clients-shell';

export enum SignupActionType {
    SignupInit = '[Signup] Init',
    SignupAbort = '[Signup] Abort',
    SignupSuccess = '[Signup] Success',
    SignupFailure = '[Signup] Failure'
}

export class SignupInitAction implements Action {
    readonly type = SignupActionType.SignupInit;

    constructor(public payload: SignupUser) { }
}

export class SignupAbortAction implements Action {
    readonly type = SignupActionType.SignupAbort;

    constructor() { }
}

export class SignupSuccessAction implements Action {
    readonly type = SignupActionType.SignupSuccess;

    constructor(public payload: Session) { }
}

export class SignupFailureAction implements Action {
    readonly type = SignupActionType.SignupFailure;

    constructor(public payload: any) { }
}

export type SignupAction = SignupInitAction
    | SignupAbortAction
    | SignupSuccessAction
    | SignupFailureAction;
