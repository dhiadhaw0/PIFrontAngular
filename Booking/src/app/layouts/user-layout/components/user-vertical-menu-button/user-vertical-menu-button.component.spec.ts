import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VerticalMenuButtonComponent } from './vertical-menu-button.component'

describe('VerticalMenuButtonComponent', () => {
  let component: VerticalMenuButtonComponent
  let fixture: ComponentFixture<VerticalMenuButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalMenuButtonComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(VerticalMenuButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
