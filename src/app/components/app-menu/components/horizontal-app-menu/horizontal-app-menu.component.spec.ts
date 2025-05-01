import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HorizontalAppMenuComponent } from './horizontal-app-menu.component'

describe('AppMenuComponent', () => {
  let component: HorizontalAppMenuComponent
  let fixture: ComponentFixture<HorizontalAppMenuComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalAppMenuComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HorizontalAppMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
