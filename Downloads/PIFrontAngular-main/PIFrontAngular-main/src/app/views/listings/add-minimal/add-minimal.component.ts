import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { OwnerDetailComponent } from './components/owner-detail/owner-detail.component'
import { DriverDetailComponent } from './components/driver-detail/driver-detail.component'
import { CabDetailComponent } from './components/cab-detail/cab-detail.component'
import { Footer1Component } from './components/footer1/footer1.component'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-add-minimal',
  standalone: true,
  imports: [
    TopbarComponent,
    OwnerDetailComponent,
    DriverDetailComponent,
    CabDetailComponent,
    Footer1Component,
    RouterModule,
  ],
  templateUrl: './add-minimal.component.html',
  styles: ``,
})
export class AddMinimalComponent {}
