import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditApplicationService } from '../../../services/credit-application.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-financial-info',
  templateUrl: './financial-info.component.html',
  styleUrls: ['./financial-info.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FinancialInfoComponent implements OnInit {
  financialForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.financialForm = this.fb.group({
      salaire: ['', [Validators.required, Validators.min(0)]],
      profession: ['', Validators.required],
      employmentYears: ['', [Validators.required, Validators.min(0)]],
      bankAccounts: ['', [Validators.required, Validators.min(1)]],
      monthlyExpenses: ['', [Validators.required, Validators.min(0)]],
      otherLoans: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.financialForm.valid) {
      // Store the financial information in a service or state management
      this.router.navigate(['/credits/application/guarantor-info']);
    }
  }
} 