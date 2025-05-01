import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ActiveLogComponent } from './active-log.component'

describe('ActiveLogComponent', () => {
  let component: ActiveLogComponent
  let fixture: ComponentFixture<ActiveLogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveLogComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ActiveLogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
