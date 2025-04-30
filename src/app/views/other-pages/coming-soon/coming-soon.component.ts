import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './coming-soon.component.html',
  styles: ``,
})
export class ComingSoonComponent {
  notifyForm!: UntypedFormGroup
  submitted: boolean = false

  public fb = inject(UntypedFormBuilder)

  constructor() {
    this.notifyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get form() {
    return this.notifyForm.controls
  }

  onSubmit() {
    this.submitted = true
  }
}
