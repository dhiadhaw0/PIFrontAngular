import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PopularHotelComponent } from './popular-hotel.component'

describe('PopularHotelComponent', () => {
  let component: PopularHotelComponent
  let fixture: ComponentFixture<PopularHotelComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularHotelComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PopularHotelComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
