import { Component } from '@angular/core'
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component'

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ProfileSettingsComponent],
  templateUrl: './settings.component.html',
  styles: ``,
})
export class SettingsComponent {}
