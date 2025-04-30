import { CommonModule } from '@angular/common'
import { Component, Input, OnInit, inject } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'

@Component({
  selector: 'settings-website-setting',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './website-setting.component.html',
  styles: ``,
})
export class WebsiteSettingComponent implements OnInit {
  webSite!: FormGroup
  formSubmit: boolean = false
  public fb = inject(FormBuilder)

  ngOnInit(): void {
    this.webSite = this.fb.group({
      siteName: ['', Validators.required],
      copyrights: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?!.*?[^aeiou]{5})(?!.*?[aeiou]{3})[a-z]*$/),
        ],
      ],
      supportEmail: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    })
  }

  get form() {
    return this.webSite.controls
  }

  onSubmit() {
    this.formSubmit = true
  }
}
