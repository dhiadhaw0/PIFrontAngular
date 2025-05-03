import { currency } from '@/app/store'
import { Component, OnInit, OnDestroy } from '@angular/core'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

interface Alert {
  name: string
}

@Component({
  selector: 'tours-hero',
  standalone: true,
  imports: [NgbAlertModule, FormsModule, CommonModule],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent implements OnInit, OnDestroy {
  currencyType = currency
  alertData: string[] = [
    'Taman Sari',
    'The Grand Palace',
    'Glacier National Park',
    'Machu Picchu',
    'Prambanan Temple',
    'Batu Gong',
    'Barobadur Temple',
    'Great Barrier Reef',
    'Argentine Patagonia',
  ]

  // Quotes for rotation
  quotes: string[] = [
    'Travel is the only thing you buy that makes you richer.',
    'Adventure awaits, go find it!',
    'Collect moments, not things.',
    'The world is a book and those who do not travel read only one page.'
  ];
  currentQuoteIndex = 0;
  currentQuote = this.quotes[0];
  quoteInterval: any;

  // Progress bar for spots left
  totalSpots = 20;
  spotsLeft = 12;

  // Form enhancements
  flexibleDates = false;
  guests = 1;
  guestOptions = Array.from({length: 10}, (_, i) => i + 1);

  // Confirmation for clear all
  showClearConfirm = false;

  ngOnInit() {
    this.startQuoteRotation();
  }

  startQuoteRotation() {
    this.quoteInterval = setInterval(() => {
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
      this.currentQuote = this.quotes[this.currentQuoteIndex];
    }, 4000);
  }

  ngOnDestroy() {
    if (this.quoteInterval) {
      clearInterval(this.quoteInterval);
    }
  }

  clearAllSearches() {
    this.showClearConfirm = true;
  }

  confirmClearAll() {
    this.alertData = [];
    this.showClearConfirm = false;
  }

  cancelClearAll() {
    this.showClearConfirm = false;
  }

  close(index: number) {
    this.alertData.splice(index, 1)
  }
}
