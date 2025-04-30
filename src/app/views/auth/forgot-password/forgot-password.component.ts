import { credits, currentYear } from '@/app/store'
import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'auth-forgot-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styles: `
    :host(auth-forgot-password) {
      display: contents;
    }
  `,
})
export class ForgotPasswordComponent {
  creditsBy = credits
  forgotpwdForm!: UntypedFormGroup
  submitted: boolean = false
  currentYear = currentYear
  public fb = inject(UntypedFormBuilder)

  constructor() {
    this.forgotpwdForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get form() {
    return this.forgotpwdForm.controls
  }

  onSubmit() {
    this.submitted = true
  }
}
