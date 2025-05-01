import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModeService } from '@/app/core/services/theme-mode.service';
import { UserService } from '@/app/services/user.service';

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, NgbTooltipModule],
  templateUrl: './profile-dropdown.component.html',
  styles: ``,
})
export class ProfileDropdownComponent implements OnInit {
  @Input() showThemeToggler: boolean = true;
  @Input() className: string = '';

  user: {
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
  } | null = null;

  theme: string = 'light';

  private themeModeService = inject(ThemeModeService);
  private userService = inject(UserService);
  private router = inject(Router);

  ngOnInit(): void {
    const email = localStorage.getItem('email');
    if (email) {
      this.userService.getUserByEmail(email).subscribe({
        next: (data) => {
          this.user = {
            firstName: data.prenom,
            lastName: data.nom,
            email: data.email,
            photo: data.photo || 'assets/images/avatar/01.jpg',
          };
        },
        error: (err) => {
          console.error('Échec du chargement des données utilisateur:', err);
        }
      });
    }
  }

  changeTheme(mode: 'light' | 'dark' | 'auto') {
    this.theme = mode;
    this.themeModeService.updateTheme(mode);
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigate(['/auth/sign-in'], { replaceUrl: true });
  }
}
