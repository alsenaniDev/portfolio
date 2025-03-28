import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../shared/services/sidebar.service';

@Component({
  selector: 'app-small-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-sidebar.component.html',
  styleUrl: './small-sidebar.component.css'
})
export class SmallSidebarComponent {

  constructor(
    private router: Router,
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {}

  geToPage(route: string) {
    this.router.navigate([route]);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
