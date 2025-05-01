import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ThemeSwitcherComponent } from './them-switcher.component'

describe('ThemSwitcherComponent', () => {
  let component: ThemeSwitcherComponent
  let fixture: ComponentFixture<ThemeSwitcherComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSwitcherComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ThemeSwitcherComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
