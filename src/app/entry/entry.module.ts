import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PipEntryComponentsModule } from './components/index';
import { reducer as signupReducer } from './store/signup.reducer';
import { SignupEffects } from './store';

@NgModule({
  imports: [
    PipEntryComponentsModule,
    StoreModule.forFeature('auth_ext', signupReducer),
    EffectsModule.forFeature([SignupEffects]),
  ]
})
export class PipEntryModule { }
