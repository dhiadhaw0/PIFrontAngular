import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FlightCard2Component } from './flight-card2.component'

describe('FlightCard2Component', () => {
  let component: FlightCard2Component
  let fixture: ComponentFixture<FlightCard2Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightCard2Component],
    }).compileComponents()

    fixture = TestBed.createComponent(FlightCard2Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
