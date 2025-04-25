import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HelpVerticalMenuButtonComponent } from './help-vertical-menu-button.component'

describe('HelpVerticalMenuButtonComponent', () => {
  let component: HelpVerticalMenuButtonComponent
  let fixture: ComponentFixture<HelpVerticalMenuButtonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpVerticalMenuButtonComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(HelpVerticalMenuButtonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
