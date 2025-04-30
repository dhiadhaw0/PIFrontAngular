import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CablistfilterComponent } from './cablistfilter.component'

describe('CablistfilterComponent', () => {
  let component: CablistfilterComponent
  let fixture: ComponentFixture<CablistfilterComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CablistfilterComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CablistfilterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
