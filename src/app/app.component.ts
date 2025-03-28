import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallSidebarComponent } from './components/small-sidebar/small-sidebar.component';
import { LargSidebarComponent } from './components/larg-sidebar/larg-sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SmallSidebarComponent, LargSidebarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
