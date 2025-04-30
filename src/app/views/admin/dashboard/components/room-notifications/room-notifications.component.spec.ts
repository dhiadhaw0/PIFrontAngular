import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RoomNotificationsComponent } from './room-notifications.component'

describe('RoomNotificationsComponent', () => {
  let component: RoomNotificationsComponent
  let fixture: ComponentFixture<RoomNotificationsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomNotificationsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(RoomNotificationsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
