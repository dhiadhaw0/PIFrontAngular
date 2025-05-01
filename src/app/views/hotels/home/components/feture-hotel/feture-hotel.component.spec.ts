import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FetureHotelComponent } from './feture-hotel.component'

describe('FetureHotelComponent', () => {
  let component: FetureHotelComponent
  let fixture: ComponentFixture<FetureHotelComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetureHotelComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FetureHotelComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
