import { Component } from '@angular/core'
import { roomNotifications } from '../../data'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'admin-dashboard-room-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-notifications.component.html',
  styles: ``,
})
export class RoomNotificationsComponent {
  roomNotifications = roomNotifications
}
