import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreditApplicationService } from '../../../services/credit-application.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

interface PackCredit {
  id: number;
  name: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  interestRate: number;
  duration: number;
}

@Component({
  selector: 'app-pack-selection',
  templateUrl: './pack-selection.component.html',
  styleUrls: ['./pack-selection.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class PackSelectionComponent implements OnInit {
  packForm: FormGroup;
  selectedPack: PackCredit | null = null;
  
  packs: PackCredit[] = [
    {
      id: 1,
      name: 'Startup Pack',
      description: 'Perfect for new businesses with limited credit history',
      minAmount: 5000,
      maxAmount: 20000,
      interestRate: 8.5,
      duration: 24
    },
    {
      id: 2,
      name: 'Growth Pack',
      description: 'For established businesses looking to expand',
      minAmount: 20000,
      maxAmount: 50000,
      interestRate: 7.5,
      duration: 36
    },
    {
      id: 3,
      name: 'Enterprise Pack',
      description: 'For large-scale business operations and investments',
      minAmount: 50000,
      maxAmount: 100000,
      interestRate: 6.5,
      duration: 48
    }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.packForm = this.fb.group({
      packId: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onPackSelect(pack: PackCredit) {
    this.selectedPack = pack;
    this.packForm.patchValue({ packId: pack.id });
  }

  onSubmit() {
    if (this.packForm.valid) {
      // Store the selected pack in a service or state management
      this.router.navigate(['/credits/application/financial-info']);
    }
  }
} 