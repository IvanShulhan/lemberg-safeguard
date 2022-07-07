import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  activeLink = 'contactUs';
  isVisible = false;

  changeIsVisible() {
    this.isVisible = !this.isVisible
  }
}
