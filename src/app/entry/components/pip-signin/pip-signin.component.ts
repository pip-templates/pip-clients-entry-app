import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { SessionService, SessionConfig, SESSION_CONFIG, EntityState } from 'pip-clients-shell';
import { PipNavService } from 'pip-webui2-nav';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { PipSigninTranslations } from './pip-signin.strings';

@Component({
    selector: 'pip-pip-signin',
    templateUrl: './pip-signin.component.html',
    styleUrls: ['./pip-signin.component.scss']
})
export class PipSigninComponent implements OnInit, OnDestroy {

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
        private translate: TranslateService
    ) {
        if (this.sessionService.session && this.sessionService.session.user_id && !window.location.href.startsWith('http://localhost')) {
            window.location.href = window.location.origin + this.sessionConfig.autorizedUrl;
            return;
        }
        this.translate.setTranslation('en', PipSigninTranslations.en, true);
        this.translate.setTranslation('ru', PipSigninTranslations.ru, true);

        this.navService.showBreadcrumb({
            items: [{ title: 'SIGNIN.TITLE' }]
        });
    }

    ngOnInit() {
        this.loading$ = this.sessionService.state$.pipe(map((state: EntityState) => state === EntityState.Progress));
        this.serverUrl$ = new BehaviorSubject<string>(this.sessionConfig.serverUrl);
        this.error$ = this.sessionService.error$;
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    public onSubmit(data): void {
        this.sessionConfig.serverUrl = data.serverUrl;
        this.sessionService.signin(data.email, data.password);
    }

    public onAbort(): void {
        this.sessionService.abortSignin();
    }

    public onSignup(): void {
        this.router.navigate(['signup']);
    }

}
