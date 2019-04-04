import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pipSigninModule } from './pip-signin/index';
import { pipSignupModule } from './pip-signup/index';

@NgModule({
  declarations: [],
  imports: [
    // Angular and vendors
    CommonModule,
    // application
    pipSigninModule,
    pipSignupModule
  ]
})
export class PipEntryComponentsModule { }
