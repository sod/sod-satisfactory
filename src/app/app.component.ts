import {DOCUMENT} from '@angular/common';
import {ChangeDetectionStrategy, Component, effect, HostListener, Inject, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {RenderScheduler} from '@ngrx/component';
import {filter} from 'rxjs';
import {z} from 'zod';
import {LocalStorageService} from './shared/service/local-storage-service';

const ThemeSchema = z.enum(['dark', 'light']);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [RenderScheduler],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    @HostListener('window:keydown')
    handleKeyDown() {
        this.renderScheduler.schedule();
    }

    protected theme = this.localStorageService.getStrictStore('theme', ThemeSchema, () => 'dark');
    protected currentTheme = this.theme.toSignal();

    constructor(
        private readonly router: Router,
        private readonly renderScheduler: RenderScheduler,
        private readonly localStorageService: LocalStorageService,
        @Inject(DOCUMENT) private readonly document: Document,
    ) {
        effect(() => {
            this.document.documentElement.setAttribute('data-bs-theme', this.currentTheme());
        });
    }

    ngOnInit(): void {
        this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => this.renderScheduler.schedule());
    }
}
