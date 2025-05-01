import { Component, OnInit, inject } from '@angular/core'
import { helpServices } from '../../data'
import { RouterModule } from '@angular/router'  

import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'center-hero',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent implements OnInit {
  helpServicesList = helpServices

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
