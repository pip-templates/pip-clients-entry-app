import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PipSigninModule } from 'pip-webui2-entry';

import { PipSigninComponent } from './pip-signin.component';

@NgModule({
  declarations: [PipSigninComponent],
  imports: [
    // Angular and vendors
    CommonModule,
    TranslateModule,
    // pip-suite2 & pip-webui2
    PipSigninModule
  ]
})
export class pipSigninModule { }
