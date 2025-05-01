import { Component } from '@angular/core'

@Component({
  selector: 'credits-home-application-steps',
  standalone: true,
  imports: [],
  templateUrl: './application-steps.component.html',
  styles: ``,
})
export class ApplicationStepsComponent {
  steps = [
    {
      number: '1',
      title: 'Choose Your Pack',
      description: 'Select the credit pack that best suits your business needs'
    },
    {
      number: '2',
      title: 'Fill Application',
      description: 'Complete our simple online application form'
    },
    {
      number: '3',
      title: 'Quick Verification',
      description: 'Our team will verify your details within 24 hours'
    },
    {
      number: '4',
      title: 'Get Approved',
      description: 'Receive your credit approval and start growing your business'
    }
  ]
} 