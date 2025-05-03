import { currency } from '@/app/store'
import { CommonModule } from '@angular/common'
import { Component, OnInit, TemplateRef, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'detail-pricing',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './pricing.component.html',
  styles: ``,
})
export class PricingComponent implements OnInit {
  private modalService = inject(NgbModal)
  modalForm!: FormGroup
  public fb = inject(FormBuilder)
  formSubmit: boolean = false
  currencyType = currency

  ngOnInit(): void {
    this.modalForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      number: ['', Validators.required, Validators.pattern('^[0-9]*$')],
    })
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content)
  }

  get form() {
    return this.modalForm.controls
  }

  onSubmit() {
    this.formSubmit = true
  }
}
