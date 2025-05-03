import { LogoBoxComponent } from '@/app/components/logo-box/logo-box.component'
import { StickyHeaderComponent } from '@/app/components/sticky-header.component'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'multiple-search-topbar',
  standalone: true,
  imports: [
    LogoBoxComponent,
    NgbDropdownModule,
    StickyHeaderComponent,
    RouterModule,
  ],
  templateUrl: './topbar.component.html',
  styles: ``,
})
export class TopbarComponent {}
