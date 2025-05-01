import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ActionboxComponent } from './actionbox.component'

describe('ActionboxComponent', () => {
  let component: ActionboxComponent
  let fixture: ComponentFixture<ActionboxComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionboxComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ActionboxComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
