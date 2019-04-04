import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PipSignupModule } from 'pip-webui2-entry';

import { PipSignupComponent } from './pip-signup.component';
import { SignupService } from '../../services/signup.service';

@NgModule({
    declarations: [PipSignupComponent],
    imports: [
        // Angular and vendors
        CommonModule,
        TranslateModule,
        // pip-suite2 & pip-webui2
        PipSignupModule
    ],
    providers: [SignupService]
})
export class pipSignupModule { }
