import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TourGridCardComponent } from './tour-grid-card.component'

describe('TourGridCardComponent', () => {
  let component: TourGridCardComponent
  let fixture: ComponentFixture<TourGridCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourGridCardComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TourGridCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
