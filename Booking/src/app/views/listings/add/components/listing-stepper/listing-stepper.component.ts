import { Component, type ElementRef, Input, ViewChild } from '@angular/core'
import { Step1Component } from '@views/listings/add/components/step-1/step-1.component'
import { Step2Component } from '@views/listings/add/components/step-2/step-2.component'
import { Step3Component } from '@views/listings/add/components/step-3/step-3.component'
import Stepper from 'bs-stepper'

@Component({
  selector: 'add-listings-stepper',
  standalone: true,
  imports: [
    Step1Component,
    Step2Component,
    Step3Component,
  ],
  template: `
    <div #stepperRef class="bs-stepper stepper-outline">
      <div class="bs-stepper-header" role="tablist">
        <div class="step" data-target="#step-1">
          <div class="text-center">
            <button
              type="button"
              class="btn btn-link step-trigger mb-0"
              role="tab"
              id="steppertrigger1"
              aria-controls="step-1"
            >
              <span class="bs-stepper-circle">1</span>
            </button>
            <h6 class="bs-stepper-label d-none d-md-block">
              Basic Information
            </h6>
          </div>
        </div>
        <div class="line"></div>

        <div class="step" data-target="#step-2">
          <div class="text-center">
            <button
              type="button"
              class="btn btn-link step-trigger mb-0"
              role="tab"
              id="steppertrigger2"
              aria-controls="step-2"
            >
              <span class="bs-stepper-circle">2</span>
            </button>
            <h6 class="bs-stepper-label d-none d-md-block">
              Detailed Information
            </h6>
          </div>
        </div>
        <div class="line"></div>

        <div class="step" data-target="#step-3">
          <div class="text-center">
            <button
              type="button"
              class="btn btn-link step-trigger mb-0"
              role="tab"
              id="steppertrigger3"
              aria-controls="step-3"
            >
              <span class="bs-stepper-circle">3</span>
            </button>
            <h6 class="bs-stepper-label d-none d-md-block">Price & Policy</h6>
          </div>
        </div>
      </div>

      <div class="bs-stepper-content p-0 pt-4 pt-md-5">
        <div class="row g-4">
          <div class="col-12">
            <form>
              <add-listing-step-1
                [stepperInstance]="stepperInstance"
                id="step-1"
                role="tabpanel"
                class="content fade"
                aria-labelledby="steppertrigger1"
              >
              </add-listing-step-1>

              <add-listing-step-2
                [stepperInstance]="stepperInstance"
                id="step-2"
                role="tabpanel"
                class="content fade"
                aria-labelledby="steppertrigger2"
              >
              </add-listing-step-2>

              <add-listing-step-3
                [stepperInstance]="stepperInstance"
                id="step-3"
                role="tabpanel"
                class="content fade"
                aria-labelledby="steppertrigger3"
              >
              </add-listing-step-3>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ListingStepperComponent {
  @ViewChild('stepperRef', { static: false }) stepperRef!: ElementRef
  @Input() className?: string

  stepperInstance?: Stepper

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.stepperRef && !this.stepperInstance) {
        this.stepperInstance = new Stepper(this.stepperRef.nativeElement, {
          linear: false,
          animation: true,
        })
      }
    })
  }

  ngOnDestroy(): void {
    this.stepperInstance?.destroy()
  }
}
