import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet, MatListModule, MatSidenavModule, MatButtonModule, MatIconModule, MatToolbarModule, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App{
  isNavbarOpen: boolean = false;
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  }
  



