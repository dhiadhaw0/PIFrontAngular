import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FlightCard3Component } from './flight-card3.component'

describe('FlightCard3Component', () => {
  let component: FlightCard3Component
  let fixture: ComponentFixture<FlightCard3Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightCard3Component],
    }).compileComponents()

    fixture = TestBed.createComponent(FlightCard3Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
