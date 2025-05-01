import { Component } from '@angular/core'
import { faqContents } from '../../data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'home-faqs',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './faqs.component.html',
  styles: ``,
})
export class FaqsComponent {
  faqList = faqContents
}
