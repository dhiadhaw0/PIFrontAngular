
import { User } from '@/app/models/user.model';
import { UserService } from '@/app/services/user.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';


@Component({
  selector: 'profile-pesronal-info',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,  // ← pour formGroup
    FormsModule           // ← si tu utilises ngModel quelque part
  ],
  templateUrl: './pesronal-info.component.html',
  styles: ``,
})
export class PesronalInfoComponent implements OnInit {
  form!: UntypedFormGroup;
  private fb = inject(UntypedFormBuilder);
  private userService = inject(UserService);

  ngOnInit() {
    const email = localStorage.getItem('email');
    this.form = this.fb.group({
      photo: [''],
      nom: [''],
      prenom: [''],
      email: [''],
      telephone: [''],
      adresse: [''],
      dateNaissance: [''],
      role: [''],
      cin: [''],
      profession: [''],
      salaire: [''],
      numTel: [''],
      matriculeFiscale: [''],
    });

    if (email) {
      this.userService.getUserByEmail(email).subscribe((user: User) => {
        this.form.patchValue({
          photo: user.photo,
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          telephone: user.telephone,
          adresse: user.adresse,
          dateNaissance: user.dateNaissance,
          role: user.role,
          cin: user.cin,
          profession: user.profession,
          salaire: user.salaire,
          numTel: user.numTel,
          matriculeFiscale: user.matriculeFiscale,
        });
      });
    }
  }

  // Méthode d'upload si besoin
  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      this.form.patchValue({ photo: reader.result as string });
    };
    reader.readAsDataURL(file);
  }

  saveChanges() {
    const updated: User = { ...this.form.value };
    this.userService.updateUser(updated).subscribe(() => {
      alert('Profil mis à jour.');
    });
  }
}
