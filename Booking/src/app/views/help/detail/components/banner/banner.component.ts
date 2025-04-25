import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'detail-banner',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './banner.component.html',
  styles: ``,
})
export class BannerComponent implements OnInit {
  searchForm!: UntypedFormGroup

  private fb = inject(UntypedFormBuilder)
  submit!: boolean

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchtxt: ['', [Validators.required, Validators.email]],
    })
  }

  get form() {
    return this.searchForm.controls
  }

  onSubmit() {
    this.submit = true
  }
}
