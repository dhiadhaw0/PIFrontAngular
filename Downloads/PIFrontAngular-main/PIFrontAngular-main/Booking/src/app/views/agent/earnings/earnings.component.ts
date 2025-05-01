import { Component } from '@angular/core'
import { EarningWidgetComponent } from './components/earning-widget/earning-widget.component'
import { EarningChartComponent } from './components/earning-chart/earning-chart.component'
import { InvoiceHistoryComponent } from './components/invoice-history/invoice-history.component'

@Component({
  selector: 'app-earnings',
  standalone: true,
  imports: [
    EarningWidgetComponent,
    EarningChartComponent,
    InvoiceHistoryComponent,
  ],
  templateUrl: './earnings.component.html',
  styles: ``,
})
export class EarningsComponent {}
