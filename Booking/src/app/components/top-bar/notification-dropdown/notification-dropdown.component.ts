import { Component, Input } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { notificationData } from './data'

@Component({
  selector: 'app-notification-dropdown',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './notification-dropdown.component.html',
  styles: ``,
})
export class NotificationDropdownComponent {
  @Input() className: string = ''
  notificationList = notificationData
}
