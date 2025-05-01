import { ThemeModeService } from '@/app/core/services/theme-mode.service';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [NgbDropdownModule, NgbTooltipModule, RouterLink],
  templateUrl: './profile-dropdown.component.html',
  styles: ``,
})
export class ProfileDropdownComponent {
  @Input() showThemeToggler: boolean = true;
  @Input() className: string = '';

  theme: string = 'light';
  public themeModeService = inject(ThemeModeService);
  public router = inject(Router);

  changeTheme(mode: 'light' | 'dark' | 'auto') {
    this.theme = mode;
    this.themeModeService.updateTheme(mode);
  }

  logout() {
    localStorage.removeItem('email');
    this.router.navigate(['/auth/sign-in'], { replaceUrl: true });
  }
}
