import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../shared/services/sidebar.service';

@Component({
  selector: 'app-larg-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './larg-sidebar.component.html',
  styleUrl: './larg-sidebar.component.css'
})
export class LargSidebarComponent {
  title: string = '';

  constructor(
    private router: Router,
    public sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.getPageTitle();
  }

  getPageTitle() {
    this.sidebarService.pageTitle$.subscribe(title => {
      this.title = title;
    });
  }
}
