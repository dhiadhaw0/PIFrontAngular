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
  selector: 'blog-newsletter',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './newsletter.component.html',
  styles: ``,
})
export class NewsletterComponent {
  subscribeForm!: UntypedFormGroup
  submitted = false

  public fb = inject(UntypedFormBuilder)

  constructor() {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get form() {
    return this.subscribeForm.controls
  }

  onSubmit() {
    this.submitted = true
  }
}
