import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PricingplansComponent } from './pricingplans.component'

describe('PricingplansComponent', () => {
  let component: PricingplansComponent
  let fixture: ComponentFixture<PricingplansComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingplansComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PricingplansComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
