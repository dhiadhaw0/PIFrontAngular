import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ModeSettingComponent } from './mode-setting.component'

describe('ModeSettingComponent', () => {
  let component: ModeSettingComponent
  let fixture: ComponentFixture<ModeSettingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeSettingComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ModeSettingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
