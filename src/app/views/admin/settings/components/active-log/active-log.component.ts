import { Component } from '@angular/core'
import { activeLogs } from '../../data'

@Component({
  selector: 'settings-active-log',
  standalone: true,
  imports: [],
  templateUrl: './active-log.component.html',
  styles: ``,
})
export class ActiveLogComponent {
  activeLogsData = activeLogs
}
