import { fromJS } from 'immutable';
import { EntityState, SessionState } from 'pip-clients-shell';
import { sessionInitialState } from 'pip-clients-shell';

import { SignupActionType, SignupAction } from './signup.actions';

export function reducer(
    state: SessionState = sessionInitialState,
    action: SignupAction
): SessionState {
    switch (action.type) {

        case SignupActionType.SignupInit: {
            let map = fromJS(state);
            map = map.set('state', EntityState.Progress);
            map = map.set('error', null);
            return <SessionState>map.toJS();
        }

        case SignupActionType.SignupAbort: {
            let map = fromJS(state);
            map = map.set('state', EntityState.Empty);
            map = map.set('error', null);
            return <SessionState>map.toJS();
        }

        case SignupActionType.SignupSuccess: {
            let map = fromJS(state);
            map = map.set('session', action.payload);
            map = map.set('state', EntityState.Error);
            map = map.set('error', null);
            return <SessionState>map.toJS();
        }

        case SignupActionType.SignupFailure: {
            let map = fromJS(state);
            map = map.set('state', EntityState.Error);
            map = map.set('error', action.payload);
            return <SessionState>map.toJS();
        }

        default: {
            return state;
        }
    }
}
