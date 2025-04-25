import { ComponentFixture, TestBed } from '@angular/core/testing'

import { GeneralPermissionComponent } from './general-permission.component'

describe('GeneralPermissionComponent', () => {
  let component: GeneralPermissionComponent
  let fixture: ComponentFixture<GeneralPermissionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralPermissionComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(GeneralPermissionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
