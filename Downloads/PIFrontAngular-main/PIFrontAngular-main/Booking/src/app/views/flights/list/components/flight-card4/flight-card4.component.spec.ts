import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FlightCard4Component } from './flight-card4.component'

describe('FlightCard4Component', () => {
  let component: FlightCard4Component
  let fixture: ComponentFixture<FlightCard4Component>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightCard4Component],
    }).compileComponents()

    fixture = TestBed.createComponent(FlightCard4Component)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
