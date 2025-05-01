import { User } from '@/app/models/user.model'
import { UserService } from '@/app/services/user.service'
import { credits, currentYear } from '@/app/store'
import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type AbstractControl,
  type UntypedFormGroup,
} from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import Swal from 'sweetalert2';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'auth-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './sign-up.component.html',
  styles: `
    :host(auth-sign-up) {
      display: contents;
    }
  `,
})
export class SignUpComponent {
  fieldTextType = false;
  signupForm: UntypedFormGroup;
  submitted = false;
  creditsBy = credits
  currentYear = currentYear
  private userService = inject(UserService);
  private router = inject(Router);
  public fb = inject(UntypedFormBuilder);

  constructor() {
    this.signupForm = this.fb.group(
      {
        nom: ['', Validators.required],
        prenom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmpwd: ['', Validators.required],
        photo: [''],
        dateNaissance: ['', Validators.required],
        role: ['CLIENT'],
        cin: ['', Validators.required],
        adresse: ['', Validators.required],
        profession: ['', Validators.required],
        salaire: ['', Validators.required],
        numTel: ['', Validators.required],
        matriculeFiscale: ['', Validators.required],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  passwordsMatchValidator(group: AbstractControl): { notSame: boolean } | null {
    const password = group.get('password')?.value;
    const confirmpwd = group.get('confirmpwd')?.value;
    return password === confirmpwd ? null : { notSame: true };
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (ctx) {
            const maxWidth = 500;
            const maxHeight = 500;
            let width = img.width;
            let height = img.height;

            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }

            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);

            const resizedDataUrl = canvas.toDataURL(file.type);
            this.signupForm.patchValue({
              photo: resizedDataUrl,
            });
          }
        };
      };
      reader.readAsDataURL(file);
    }
  }

  changetype() {
    this.fieldTextType = !this.fieldTextType;
  }

  get form() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.invalid) return;

    const formValue = this.signupForm.value;
    const user: User = {
      idUser: 0,
      nom: formValue.nom,
      prenom: formValue.prenom,
      email: formValue.email,
      password: formValue.password,
      telephone: formValue.telephone,
      photo: formValue.photo,
      dateNaissance: formValue.dateNaissance,
      role: formValue.role,
      cin: +formValue.cin,
      adresse: formValue.adresse,
      profession: formValue.profession,
      salaire: +formValue.salaire,
      numTel: +formValue.numTel,
      matriculeFiscale: formValue.matriculeFiscale,
    };

    this.userService.register(user).subscribe({
      next: () => {
        localStorage.setItem('pendingEmail', formValue.email);

        Swal.fire({
          title: 'Vérification Email',
          html: `Un code OTP a été envoyé à <strong>${formValue.email}</strong>. Veuillez le saisir ci-dessous :`,
          input: 'text',
          inputLabel: 'Votre code OTP',
          inputPlaceholder: 'Entrez votre OTP',
          inputValidator: (value) => {
            if (!value) {
              return 'Vous devez saisir un code OTP !';
            }
            return null;
          },
          showCancelButton: true,
          confirmButtonText: 'Valider',
          cancelButtonText: 'Annuler'
        }).then((result) => {
          if (result.isConfirmed && result.value) {
            const otp = result.value;
            const email = localStorage.getItem('pendingEmail');

            if (!email) {
              Swal.fire({
                icon: 'error',
                title: 'Erreur',
                text: "Impossible de retrouver l'email pour la vérification OTP.",
              });
              return;
            }

            this.userService.validateOtp(email, otp).subscribe({
              next: (res: any) => {
                console.log('Réponse OTP complète :', res);

                // Si backend renvoie une string brute ("OTP validé")
                if (typeof res === 'string') {
                  if (res.toLowerCase().includes('validé')) {
                    localStorage.removeItem('pendingEmail');
                    Swal.fire({
                      icon: 'success',
                      title: 'Email vérifié',
                      text: 'Votre adresse email a bien été validée.',
                    }).then(() => {
                      this.router.navigate(['/auth/sign-in']);
                    });
                  } else {
                    Swal.fire({
                      icon: 'error',
                      title: 'OTP invalide',
                      text: 'Le code saisi est incorrect. Veuillez réessayer.',
                    });
                  }
                } else {
                  if (res.success === true || res.status === 'OK') {
                    localStorage.removeItem('pendingEmail');
                    Swal.fire({
                      icon: 'success',
                      title: 'Email vérifié',
                      text: res.message || 'Votre adresse email a bien été validée.',
                    }).then(() => {
                      this.router.navigate(['/auth/sign-in']);
                    });
                  } else {
                    Swal.fire({
                      icon: 'error',
                      title: 'OTP invalide',
                      text: res.message || 'Le code saisi est incorrect.',
                    });
                  }
                }
              },
              error: (err) => {
                console.error('Erreur OTP complète :', err);
                Swal.fire({
                  icon: 'error',
                  title: 'Erreur',
                  text: 'Une erreur est survenue lors de la vérification OTP.',
                });
              }
            });
          }
        });
      }
    });
  }
}
