import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SESSION_CONFIG, SessionConfig, SessionService, EntityState } from 'pip-clients-shell';
import { PipNavService } from 'pip-webui2-nav';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { PipSignupTranslations } from './pip-signup.strings';
import { SignupService } from '../../services/signup.service';

@Component({
    selector: 'pip-pip-signup',
    templateUrl: './pip-signup.component.html',
    styleUrls: ['./pip-signup.component.scss']
})
export class PipSignupComponent implements OnInit {

    private subs: Subscription = new Subscription();

    public loading$: Observable<boolean>;
    public serverUrl$: BehaviorSubject<string>;
    public email: string;
    public password: string;
    public error$: Observable<string>;

    constructor(
        @Inject(SESSION_CONFIG) public sessionConfig: SessionConfig,
        private navService: PipNavService,
        private router: Router,
        private sessionService: SessionService,
        private signupService: SignupService,
        private translate: TranslateService
    ) {
        if (this.sessionService.session && this.sessionService.session.user_id && !window.location.href.startsWith('http://localhost')) {
            window.location.href = window.location.origin + this.sessionConfig.autorizedUrl;
            return;
        }
        this.translate.setTranslation('en', PipSignupTranslations.en, true);
        this.translate.setTranslation('ru', PipSignupTranslations.ru, true);

        this.navService.showBreadcrumb({
            items: [{ title: 'SIGNUP.TITLE' }]
        });
    }

    ngOnInit() {
        this.loading$ = this.sessionService.state$.pipe(map((state: EntityState) => state === EntityState.Progress));
        this.serverUrl$ = new BehaviorSubject<string>(this.sessionConfig.serverUrl);
        this.error$ = this.sessionService.error$;
    }

    public onSubmit(data) {
        this.sessionConfig.serverUrl = data.serverUrl;
        this.signupService.signup({
            email: data.email,
            name: data.name,
            password: data.password
        });
    }

    public onSignin() {
        this.router.navigate(['signin']);
    }

}
