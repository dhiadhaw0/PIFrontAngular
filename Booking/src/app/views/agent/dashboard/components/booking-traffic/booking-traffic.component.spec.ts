import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BookingTrafficComponent } from './booking-traffic.component'

describe('BookingTrafficComponent', () => {
  let component: BookingTrafficComponent
  let fixture: ComponentFixture<BookingTrafficComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingTrafficComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(BookingTrafficComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
