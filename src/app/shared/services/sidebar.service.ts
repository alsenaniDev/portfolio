import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SidebarService {
    private pageTitle = new BehaviorSubject<string>('');
    pageTitle$ = this.pageTitle.asObservable();

    constructor(private router: Router) {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event) => {
                const navEnd = event as NavigationEnd;
                this.setPageTitle(navEnd.urlAfterRedirects);
            });
    }

    private setPageTitle(route: string) {
        switch (route) {
            case '/':
                this.pageTitle.next('About me');
                break;
            case '/projects':
                this.pageTitle.next('Projects');
                break;
            case '/education':
                this.pageTitle.next('Education');
                break;
            case '/experiences':
                this.pageTitle.next('Experiences');
                break;
            default:
                this.pageTitle.next('');
                break;
        }
    }
}