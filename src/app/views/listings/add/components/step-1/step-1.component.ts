import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { CommonModule } from '@angular/common'
import { Component, inject, Input, type OnInit } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import Stepper from 'bs-stepper'
import type { Options } from 'choices.js'
import {
  DROPZONE_CONFIG,
  DropzoneModule,
  type DropzoneConfigInterface,
} from 'ngx-dropzone-wrapper'

type UploadedFile = {
  name: string
  size: number
  type: string
  dataURL?: string
}

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 5,
  acceptedFiles: 'image/*',
}

@Component({
  selector: 'add-listing-step-1',
  standalone: true,
  imports: [
    SelectFormInputDirective,
    DropzoneModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './step-1.component.html',
  styles: ``,
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
  ],
})
export class Step1Component implements OnInit {
  @Input() stepperInstance?: Stepper

  categoryForm!: UntypedFormGroup
  submit = false

  private fb = inject(UntypedFormBuilder)

  public dropzoneConfig: DropzoneConfigInterface = {
    clickable: true,
    addRemoveLinks: true,
    maxFiles: 5,
  }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      guest: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  get form() {
    return this.categoryForm.controls
  }

  gotoNext() {
    this.submit = true
    this.stepperInstance?.next()
  }
}
