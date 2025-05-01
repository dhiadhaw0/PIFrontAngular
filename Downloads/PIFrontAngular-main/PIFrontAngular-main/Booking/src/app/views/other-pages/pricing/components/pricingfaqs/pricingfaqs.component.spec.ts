import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PricingfaqsComponent } from './pricingfaqs.component'

describe('PricingfaqsComponent', () => {
  let component: PricingfaqsComponent
  let fixture: ComponentFixture<PricingfaqsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingfaqsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PricingfaqsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
