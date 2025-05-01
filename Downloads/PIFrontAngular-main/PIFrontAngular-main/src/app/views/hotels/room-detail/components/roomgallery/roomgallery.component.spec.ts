import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RoomgalleryComponent } from './roomgallery.component'

describe('RoomgalleryComponent', () => {
  let component: RoomgalleryComponent
  let fixture: ComponentFixture<RoomgalleryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomgalleryComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(RoomgalleryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
