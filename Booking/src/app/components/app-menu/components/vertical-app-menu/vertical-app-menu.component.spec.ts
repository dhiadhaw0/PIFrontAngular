import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VerticalAppMenuComponent } from './vertical-app-menu.component'

describe('AppMenuComponent', () => {
  let component: VerticalAppMenuComponent
  let fixture: ComponentFixture<VerticalAppMenuComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalAppMenuComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(VerticalAppMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
