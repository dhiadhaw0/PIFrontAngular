import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BookingPolicyComponent } from './booking-policy.component'

describe('BookingPolicyComponent', () => {
  let component: BookingPolicyComponent
  let fixture: ComponentFixture<BookingPolicyComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingPolicyComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(BookingPolicyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
