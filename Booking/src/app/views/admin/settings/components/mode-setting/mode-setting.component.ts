import { ThemeModeService } from '@/app/core/services/theme-mode.service'
import { Component, inject } from '@angular/core'

@Component({
  selector: 'settings-mode-setting',
  standalone: true,
  imports: [],
  templateUrl: './mode-setting.component.html',
  styles: ``,
})
export class ModeSettingComponent {
  mode: string = ''

  public themeModeService = inject(ThemeModeService)
  changeTheme(mode: 'light' | 'dark' | 'auto') {
    this.mode = mode
    this.themeModeService.updateTheme(mode)
  }
}
