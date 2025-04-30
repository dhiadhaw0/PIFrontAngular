import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DestinationStepsComponent } from './destination-steps.component'

describe('DestinationStepsComponent', () => {
  let component: DestinationStepsComponent
  let fixture: ComponentFixture<DestinationStepsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationStepsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DestinationStepsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
