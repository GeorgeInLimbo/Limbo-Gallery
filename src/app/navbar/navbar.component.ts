import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isActive = false;

  links = [
    { linkName: 'Gallery', path: '.' },
    { linkName: 'Artists', path: '.' },
    { linkName: 'Events', path: '.' },
    { linkName: 'Musings', path: '.' },
    { linkName: 'Log In', path: '.' },
  ];

  constructor(private readonly router: Router) {}

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.isActive = false;
  }
}
