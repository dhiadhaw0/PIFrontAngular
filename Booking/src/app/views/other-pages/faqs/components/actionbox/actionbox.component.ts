import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'

@Component({
  selector: 'faqs-actionbox',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './actionbox.component.html',
  styles: ``,
})
export class ActionboxComponent implements OnInit {
  subscribeForm!: UntypedFormGroup

  private fb = inject(UntypedFormBuilder)
  submit!: boolean

  ngOnInit(): void {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  get form() {
    return this.subscribeForm.controls
  }

  onSubmit() {
    this.submit = true
  }
}
