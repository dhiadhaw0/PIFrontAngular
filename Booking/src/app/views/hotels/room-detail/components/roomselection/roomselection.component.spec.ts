import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RoomselectionComponent } from './roomselection.component'

describe('RoomselectionComponent', () => {
  let component: RoomselectionComponent
  let fixture: ComponentFixture<RoomselectionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomselectionComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(RoomselectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
