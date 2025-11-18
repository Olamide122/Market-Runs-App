import { Component, ViewChild } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatListModule, MatSidenavModule, MatButtonModule, MatIconModule, MatToolbarModule, RouterLink, MatDrawer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  isNavbarOpen: boolean = true;
  showmenu: boolean = true;
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (this.router.url === '/' || this.router.url === '/register') {
        this.showmenu = false;
        this.isNavbarOpen = false;
      } else {
        this.showmenu = true;
        this.isNavbarOpen = false || true;
      }
    });

} 
 @ViewChild('drawer') drawer!: MatDrawer;
}