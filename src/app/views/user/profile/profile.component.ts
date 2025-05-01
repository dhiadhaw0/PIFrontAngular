import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ProfileComponent implements OnInit {
  user: any = {};
  email: string = localStorage.getItem('email') || '';
  photoUrl: string | null = null;

  constructor(private userService: UserService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.userService.getUserByEmail(this.email).subscribe({
      next: (data) => {
        this.user = {
          ...data,
          firstName: data.prenom,
          lastName: data.nom,
          photoUrl: data.photo || 'assets/images/default-profile.jpg',
          profession: data.profession,
          email: data.email,
          phone: data.numTel,
          dateOfBirth: this.formatDateForInput(data.dateNaissance),
          cin: data.cin.toString(),
          address: data.adresse,
          taxId: data.matriculeFiscale,
          salary: data.salaire,
          portfolioValue: 250000,
          availableBalance: 15000,
          savings: 50000,
          investments: 185000,
          financialScore: 850,
          password: '',
          bankAccounts: data.compteBancaires?.map(cb => ({
            balance: cb.solde,
            bankCode: cb.codeBanque,
            rib: cb.rib,
          })) || [],
          stats: {
            credits: 3,
            formations: data.formations?.length || 0,
            transactions: 156,
          },
        };
      },
      error: (err) => {
        console.error('Failed to load user profile:', err);
      }
    });
  }

  formatDateForInput(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // yyyy-MM-dd
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.photoUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onEditPhoto(): void {
    console.log('Edit photo clicked');
  }

  onOpenSettings(): void {
    console.log('Settings clicked');
  }

  onEditProfileModal(content: any): void {
    this.modalService.open(content);
  }

  onSaveProfile(): void {
    if (!this.email) {
      console.error("Email de l'utilisateur manquant !");
      return;
    }

    const updatedUser = {
      ...this.user,
      nom: this.user.lastName,
      prenom: this.user.firstName,
      numTel: this.user.phone,
      adresse: this.user.address,
      salaire: this.user.salary,
      profession: this.user.profession,
      dateNaissance: this.user.dateOfBirth,
      cin: this.user.cin,
      matriculeFiscale: this.user.taxId,
      photo: this.user.photoUrl,
    };

    this.userService.updateUserByEmail(this.email, updatedUser).subscribe({
      next: (data) => {
        this.user = data;
        Swal.fire({
          icon: 'success',
          title: 'Profil mis à jour',
          text: 'Vos informations ont été enregistrées avec succès.',
        }).then(() => {
          window.location.reload();
        });
      },
      error: (err) => {
        console.error('Erreur de mise à jour :', err);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Impossible de mettre à jour le profil.',
        });
      }
    });
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  }

  formatDate(date: string): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(date));
  }

  getFinancialScoreColor(score: number): string {
    if (score >= 800) return '#00b894';
    if (score >= 700) return '#00cec9';
    if (score >= 600) return '#fdcb6e';
    return '#ff7675';
  }
}
