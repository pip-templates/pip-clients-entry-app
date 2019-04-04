import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ShellConfig, ShellService } from 'pip-clients-shell';
import { PipThemesService } from 'pip-webui2-themes';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    private language$: BehaviorSubject<string>;

    public config$: Observable<ShellConfig>;

    constructor(
        private themeService: PipThemesService,

        private shell: ShellService,
        private translate: TranslateService,
    ) {
        this.config$ = this.shell.config$;
        this.language$ = new BehaviorSubject<string>('en');
        this.translate.setDefaultLang(this.language$.getValue());
        this.translate.use(this.language$.getValue());
    }

    ngOnInit() {
    }

}
