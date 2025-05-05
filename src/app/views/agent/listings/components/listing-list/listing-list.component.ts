import { Component , OnInit } from '@angular/core'
import { roomBookingList } from '../../data'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common'
import { currency } from '@/app/store'
import { WalletService } from 'src/app/services/wallet.service';
import { Portfeuille } from 'src/app/models/wallet/wallet.model';



@Component({
  selector: 'listing-list',
  standalone: true,
  imports: [NgbDropdownModule, RouterModule, CommonModule, DatePipe, DecimalPipe],
  providers: [DatePipe, DecimalPipe],
  templateUrl: './listing-list.component.html',
  styleUrls: ['./listing-list.component.scss'],
})
export class ListingListComponent implements OnInit {

  allRoomBookingList = roomBookingList
  currencyType = currency
  wallets: Portfeuille[] = [];

  constructor(private WalletService: WalletService) {}

  ngOnInit(): void {
    this.WalletService.getAllWallets().subscribe(data => {
      this.wallets = data;
    });
  }
}
