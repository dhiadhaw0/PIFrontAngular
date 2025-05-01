import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UpcomingArrivalsComponent } from './upcoming-arrivals.component'

describe('UpcomingArrivalsComponent', () => {
  let component: UpcomingArrivalsComponent
  let fixture: ComponentFixture<UpcomingArrivalsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingArrivalsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(UpcomingArrivalsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
