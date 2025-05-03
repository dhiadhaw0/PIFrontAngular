import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InclusionComponent } from './inclusion.component'

describe('InclusionComponent', () => {
  let component: InclusionComponent
  let fixture: ComponentFixture<InclusionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InclusionComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(InclusionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
