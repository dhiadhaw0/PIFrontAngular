import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-logo-box',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a class="navbar-brand" routerLink="/">
      @if (onlyDark) {
        <img
          [class]="'navbar-brand-item'"
          src="assets/images/logo-light.svg"
          alt="logo"
        />
      } @else {
        <img
          [class]="
            'navbar-brand-item ' +
            (!onlyDark && 'light-mode-item ') +
            imgClassName
          "
          src="assets/images/logo.svg"
          alt="logo"
        />
        <img
          [class]="'dark-mode-item navbar-brand-item ' + imgClassName"
          src="assets/images/logo-light.svg"
          alt="logo"
        />
      }
    </a>
  `,
  styles: `
    :host(app-logo-box) {
      display: contents;
    }
  `,
})
export class LogoBoxComponent {
  @Input() imgClassName?: string
  @Input() onlyDark?: boolean
}
