import { UserService } from '@/app/services/user.service'
import { credits, currentYear } from '@/app/store'
import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { Router, RouterModule } from '@angular/router'
import { ActivatedRoute } from '@angular/router'  // Import ActivatedRoute
import { Store } from '@ngrx/store'
import Swal from 'sweetalert2'

@Component({
  selector: 'auth-sign-in',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styles: `
    :host(auth-sign-in) {
      display: contents;
    }
  `,
})
export class SignInComponent {
  creditsBy = credits;
  currentYear = currentYear;

  signinForm: UntypedFormGroup;
  submitted = false;
  passwordType = true;

  private fb = inject(UntypedFormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);  

  constructor() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get form() {
    return this.signinForm.controls;
  }

  changeType() {
    this.passwordType = !this.passwordType;
  }

  onLogin() {
    this.submitted = true;

    if (this.signinForm.invalid) {
      return;
    }

    const email = this.form['email'].value;
    const password = this.form['password'].value;

    this.userService.login(email, password).subscribe({
      next: (message: string) => {
        Swal.fire({
          icon: 'success',
          title: 'Bienvenue !',
          text: message,
        }).then(() => {
          localStorage.setItem('email', email);
    
          this.router.navigateByUrl('/user/profile');

        });
      },
      error: (err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Erreur de connexion',
          text: err.error || 'Email ou mot de passe incorrect.',
        });
      },
    });
  }
}
