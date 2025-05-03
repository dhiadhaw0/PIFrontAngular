import { Component } from '@angular/core'
import { helpFaqs } from '../../data'
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'center-faq',
  standalone: true,
  imports: [NgbAccordionModule],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent {
  faqList = helpFaqs
}
