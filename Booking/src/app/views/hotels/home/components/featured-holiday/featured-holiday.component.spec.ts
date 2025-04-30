import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FeaturedHolidayComponent } from './featured-holiday.component'

describe('FeaturedHolidayComponent', () => {
  let component: FeaturedHolidayComponent
  let fixture: ComponentFixture<FeaturedHolidayComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedHolidayComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FeaturedHolidayComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
