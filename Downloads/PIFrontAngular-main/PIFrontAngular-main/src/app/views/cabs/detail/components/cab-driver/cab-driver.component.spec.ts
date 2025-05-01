import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CabDriverComponent } from './cab-driver.component'

describe('CabDriverComponent', () => {
  let component: CabDriverComponent
  let fixture: ComponentFixture<CabDriverComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabDriverComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CabDriverComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
