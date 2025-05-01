import { CommonModule } from '@angular/common'
import { Component, Inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'profile-update-email',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-email.component.html',
  styles: ``,
})
export class UpdateEmailComponent {
  updateEmail!: FormGroup
  formSubmit: boolean = false

  constructor(private fb: FormBuilder) {
    this.updateEmail = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get form() {
    return this.updateEmail.controls
  }

  onSubmit() {
    this.formSubmit = true
  }
}
