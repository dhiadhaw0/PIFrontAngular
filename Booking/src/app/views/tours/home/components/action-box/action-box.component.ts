import { CommonModule } from '@angular/common'
import { Component, Renderer2, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'tours-action-box',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './action-box.component.html',
  styles: ``,
})
export class ActionBoxComponent {
  actionSubmit: boolean = false

  actionBox!: UntypedFormGroup

  private fb = inject(UntypedFormBuilder)
  public renderer = inject(Renderer2)

  constructor() {
    this.actionBox = this.fb.group({
      actionEmail: ['', [Validators.required, Validators.email]],
    })
  }

  get form() {
    return this.actionBox.controls
  }

  actionForm() {
    this.actionSubmit = true
  }
}
