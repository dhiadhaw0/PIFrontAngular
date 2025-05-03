import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap'
import { activeLogs } from './data'

@Component({
  selector: 'agent-settings',
  standalone: true,
  imports: [NgbNavModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './settings.component.html',
  styles: ``,
})
export class SettingsComponent {
  updatePasswords: FormGroup
  formSubmit: boolean = false
  isShowPassword: boolean = false
  isShowPassword1: boolean = false
  isShowPassword2: boolean = false
  updateEmail!: FormGroup
  securitySettings!: FormGroup
  formSubmitted: boolean = false
  submitedCode: boolean = false
  activeLogsData = activeLogs

  get form() {
    return this.updatePasswords.controls
  }
  get emailForm() {
    return this.updateEmail.controls
  }
  get code() {
    return this.securitySettings.controls
  }

  constructor(public formBuilder: FormBuilder) {
    this.securitySettings = this.formBuilder.group({
      number: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/),
        ],
      ],
    })

    this.updateEmail = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
    this.updatePasswords = this.formBuilder.group(
      {
        currentPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ],
        ],
        confirmpassword: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(30),
          ],
        ],
      },
      { validators: this.validateAreEqual }
    )
  }

  public validateAreEqual(c: AbstractControl): { notSame: boolean } | null {
    return c.value.password === c.value.confirmpassword
      ? null
      : { notSame: true }
  }

  onSubmit() {
    this.formSubmit = true
  }

  emailSubmit() {
    this.formSubmitted = true
  }

  submitCode() {
    this.submitedCode = true
  }
}
