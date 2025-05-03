import { Component } from '@angular/core'
import { EmailSettingComponent } from '../email-setting/email-setting.component'
import { GeneralPermissionComponent } from '../general-permission/general-permission.component'
import { ModeSettingComponent } from '../mode-setting/mode-setting.component'
import { WebsiteSettingComponent } from '../website-setting/website-setting.component'
import { ActiveLogComponent } from '../active-log/active-log.component'
import { AccountSettingComponent } from '../account-setting/account-setting.component'

@Component({
  selector: 'settings-profile-settings',
  standalone: true,
  imports: [
    EmailSettingComponent,
    GeneralPermissionComponent,
    ModeSettingComponent,
    WebsiteSettingComponent,
    ActiveLogComponent,
    AccountSettingComponent,
  ],
  templateUrl: './profile-settings.component.html',
  styles: ``,
})
export class ProfileSettingsComponent {}
