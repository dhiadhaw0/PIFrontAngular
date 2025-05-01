import {
  Component,
  Input,
  ViewChild,
  type ElementRef,
  OnInit,
} from '@angular/core'
import Stepper from 'bs-stepper'
import 'bs-stepper/dist/css/bs-stepper.min.css'

@Component({
  selector: 'bs-stepper-wrapper',
  standalone: true,
  imports: [],
  template: `
    <div #stepperRef [class]="className">
      <ng-content></ng-content>
    </div>
  `,
})
export class BsStepperWrapperComponent {
  @ViewChild('stepperRef', { static: false }) stepperRef!: ElementRef
  @Input() className?: string

  stepperInstance?: Stepper

  ngAfterViewInit(): void {
    if (this.stepperRef && !this.stepperInstance) {
      this.stepperInstance = new Stepper(this.stepperRef.nativeElement, {
        linear: false,
        animation: true,
      })
    }
  }

  ngOnDestroy(): void {
    this.stepperInstance?.destroy()
  }
}
