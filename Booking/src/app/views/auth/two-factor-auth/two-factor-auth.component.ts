import { credits, currentYear } from '@/app/store'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgOtpInputModule } from 'ng-otp-input'

@Component({
  selector: 'auth-two-factor-auth',
  standalone: true,
  imports: [NgOtpInputModule, RouterModule],
  templateUrl: './two-factor-auth.component.html',
  styles: `
    :host(auth-two-factor-auth) {
      display: contents;
    }
  `,
})
export class TwoFactorAuthComponent {
  currentYear = currentYear
  creditsBy = credits
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '95px',
      height: '58px',
      'border-radius': '0.5rem',
      'font-size': 'medium',
    },
  }
}
