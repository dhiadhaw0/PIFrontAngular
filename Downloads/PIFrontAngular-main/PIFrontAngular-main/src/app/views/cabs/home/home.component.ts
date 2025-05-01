import { Component } from '@angular/core'
import { WalletComponent } from './components/wallet/wallet.component'
import { TopbarComponent } from './components/topbar/topbar.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'cab-home',
  standalone: true,
  imports: [
    TopbarComponent,
    WalletComponent,
    Footer1Component,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
