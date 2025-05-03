import { credits, currentYear } from '@/app/store'
import { footer4Link } from '@/assets/data/footer-items'
import { CommonModule } from '@angular/common'
import { Component, Renderer2, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'tours-home-footer4',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './footer4.component.html',
  styles: ``,
})
export class Footer4Component {
  footer4Link = footer4Link
  currentYear = currentYear
  submit: boolean = false
  creditsBy = credits
  subscriptionForm!: UntypedFormGroup

  private fb = inject(UntypedFormBuilder)
  public renderer = inject(Renderer2)

  constructor() {
    this.subscriptionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get form() {
    return this.subscriptionForm.controls
  }

  submitForm() {
    this.submit = true
  }
}
