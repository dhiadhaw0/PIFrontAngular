import { Component } from '@angular/core'

@Component({
  selector: 'help-vertical-menu-button',
  standalone: true,
  template: `
    <button
      class="navbar-toggler ms-auto"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      (click)="showMenu()"
      [attr.aria-expanded]="isMenuOpen"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-animation">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  `,
})
export class HelpVerticalMenuButtonComponent {
  isMenuOpen: boolean = false

  showMenu() {
    this.isMenuOpen = !this.isMenuOpen
    document.getElementById('navbarCollapse')?.classList.toggle('show')
  }
}
