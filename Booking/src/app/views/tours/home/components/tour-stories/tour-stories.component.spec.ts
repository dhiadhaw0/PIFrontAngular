import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TourStoriesComponent } from './tour-stories.component'

describe('TourStoriesComponent', () => {
  let component: TourStoriesComponent
  let fixture: ComponentFixture<TourStoriesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourStoriesComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TourStoriesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
