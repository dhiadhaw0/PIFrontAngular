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

@Component({
  selector: 'profile-update-password',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-password.component.html',
  styles: ``,
})
export class UpdatePasswordComponent {
  updatePasswords: FormGroup
  formSubmit: boolean = false
  isShowPassword: boolean = false
  isShowPassword1: boolean = false
  isShowPassword2: boolean = false
  constructor(public formBuilder: FormBuilder) {
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
}
