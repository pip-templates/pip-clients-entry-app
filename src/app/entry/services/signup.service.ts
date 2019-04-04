import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SignupUser } from 'pip-clients-shell';

import { SignupInitAction } from '../store/index';

@Injectable()
export class SignupService {

    constructor(
        private store: Store<any>
    ) { }

    public signup(user: SignupUser) {
        this.store.dispatch(new SignupInitAction(user));
    }
}
