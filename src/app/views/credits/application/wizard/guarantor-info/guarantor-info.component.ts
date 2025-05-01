import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditApplicationService } from '../../../services/credit-application.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-guarantor-info',
  templateUrl: './guarantor-info.component.html',
  styleUrls: ['./guarantor-info.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class GuarantorInfoComponent implements OnInit {
  guarantorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.guarantorForm = this.fb.group({
      typeGarant: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      salaire: ['', [Validators.required, Validators.min(0)]],
      profession: ['', Validators.required],
      relation: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.guarantorForm.valid) {
      // Store the guarantor information in a service or state management
      this.router.navigate(['/credits/application/review']);
    }
  }
} 