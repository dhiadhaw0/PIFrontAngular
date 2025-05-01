import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditApplicationService } from '../../../services/credit-application.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class UserTypeComponent implements OnInit {
  userTypeForm: FormGroup;
  selectedType: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.userTypeForm = this.fb.group({
      userType: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onTypeSelect(type: string) {
    this.selectedType = type;
    this.userTypeForm.patchValue({ userType: type });
  }

  onSubmit() {
    if (this.userTypeForm.valid) {
      const userType = this.userTypeForm.get('userType')?.value;
      if (userType === 'ENTREPRENEUR') {
        this.router.navigate(['/credits/application/pack-selection']);
      } else {
        this.router.navigate(['/credits/application/financial-info']);
      }
    }
  }
} 