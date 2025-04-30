import { ComponentFixture, TestBed } from '@angular/core/testing'

import { GuestActivityComponent } from './guest-activity.component'

describe('GuestActivityComponent', () => {
  let component: GuestActivityComponent
  let fixture: ComponentFixture<GuestActivityComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestActivityComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(GuestActivityComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
