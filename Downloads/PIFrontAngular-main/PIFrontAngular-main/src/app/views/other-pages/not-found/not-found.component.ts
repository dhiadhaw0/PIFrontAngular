import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { Footer1Component } from './components/footer1/footer1.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TopbarComponent, Footer1Component, RouterModule],
  templateUrl: './not-found.component.html',
  styles: ``,
})
export class NotFoundComponent {}
