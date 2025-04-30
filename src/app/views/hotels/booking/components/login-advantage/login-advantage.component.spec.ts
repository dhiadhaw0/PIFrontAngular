import { ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginAdvantageComponent } from './login-advantage.component'

describe('LoginAdvantageComponent', () => {
  let component: LoginAdvantageComponent
  let fixture: ComponentFixture<LoginAdvantageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAdvantageComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(LoginAdvantageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
