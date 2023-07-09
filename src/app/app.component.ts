import {ChangeDetectionStrategy, Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {RenderScheduler} from '@ngrx/component';
import {filter} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [RenderScheduler],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    @HostListener('window:keydown')
    handleKeyDown() {
        this.renderScheduler.schedule();
    }

    constructor(
        private readonly router: Router,
        private readonly renderScheduler: RenderScheduler,
    ) {}

    ngOnInit(): void {
        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.renderScheduler.schedule());
    }
}
