import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CancellationChargesComponent } from './cancellation-charges.component'

describe('CancellationChargesComponent', () => {
  let component: CancellationChargesComponent
  let fixture: ComponentFixture<CancellationChargesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CancellationChargesComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CancellationChargesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
