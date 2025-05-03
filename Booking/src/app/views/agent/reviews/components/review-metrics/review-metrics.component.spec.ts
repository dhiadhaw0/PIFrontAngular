import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ReviewMetricsComponent } from './review-metrics.component'

describe('ReviewMetricsComponent', () => {
  let component: ReviewMetricsComponent
  let fixture: ComponentFixture<ReviewMetricsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewMetricsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ReviewMetricsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
