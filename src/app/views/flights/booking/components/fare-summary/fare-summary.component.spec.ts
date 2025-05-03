import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FareSummaryComponent } from './fare-summary.component'

describe('FareSummaryComponent', () => {
  let component: FareSummaryComponent
  let fixture: ComponentFixture<FareSummaryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FareSummaryComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FareSummaryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
