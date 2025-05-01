import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { UserService } from '@/app/services/user.service';
import { USER_PROFILE_MENU_ITEMS } from '@/assets/data'; // Assure-toi que ce chemin est correct
import { User } from 'Booking/src/app/core/models'; // Si tu utilises un modèle d'utilisateur

@Component({
  selector: 'user-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="card-body p-3">
      <div class="text-center mb-3">
        <div class="avatar avatar-xl mb-2">
          <img
            class="avatar-img rounded-circle border border-2 border-white"
            [src]="user.photo || 'assets/images/avatar/default.jpg'"
            alt="Photo de profil"
          />
        </div>
        <h6 class="mb-0">{{ user.prenom }} {{ user.nom }}</h6>
        <a
          href="javascript:void(0);"
          class="text-reset text-primary-hover small"
        >
          {{ user.email }}
        </a>
        <hr />
      </div>

      <ul class="nav nav-pills-primary-soft flex-column">
        <li class="nav-item" *ngFor="let item of usermenuItems; trackBy: trackByFn">
          <a
            class="nav-link"
            [ngClass]="{
              active:
                currentPath === item.url ||
                (item === usermenuItems[0] && currentPath === null)
            }"
            [routerLink]="item.url"
          >
            <i class="{{ item.icon }} fa-fw me-2"></i>{{ item.label }}
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link text-danger bg-danger-soft-hover"
            routerLink="/auth/sign-in"
          >
            <i class="fas fa-sign-out-alt fa-fw me-2"></i>Sign Out
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class SidebarComponent implements OnInit {
  public offcanvasService = inject(NgbOffcanvas);
  public userService = inject(UserService);

  usermenuItems = USER_PROFILE_MENU_ITEMS; // Liste d'items pour le menu
  currentPath: string | null = null;

  user = {
    nom: '',
    prenom: '',
    email: '',
    photo: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentPath = this.router.url;

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.currentPath = event.urlAfterRedirects;
      });

    const email = localStorage.getItem('email');
    if (email) {
      this.userService.getUserByEmail(email).subscribe({
        next: (data) => {
          this.user = {
            nom: data.nom,
            prenom: data.prenom,
            email: data.email,
            photo: data.photo || 'assets/images/avatar/default.jpg',
          };
        },
        error: (err) => {
          console.error('Failed to load user data:', err);
        }
      });
    }
  }

  // Optionally, you can define a trackBy function for better performance
  trackByFn(index: number, item: any): number {
    return index; // or use a unique identifier from the item if available
  }
}
