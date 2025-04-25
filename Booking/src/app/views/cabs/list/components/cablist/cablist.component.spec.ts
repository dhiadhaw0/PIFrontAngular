import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CablistComponent } from './cablist.component'

describe('CablistComponent', () => {
  let component: CablistComponent
  let fixture: ComponentFixture<CablistComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CablistComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CablistComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
