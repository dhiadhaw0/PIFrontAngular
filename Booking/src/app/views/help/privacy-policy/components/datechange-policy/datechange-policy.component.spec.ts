import { ComponentFixture, TestBed } from '@angular/core/testing'

import { DatechangePolicyComponent } from './datechange-policy.component'

describe('DatechangePolicyComponent', () => {
  let component: DatechangePolicyComponent
  let fixture: ComponentFixture<DatechangePolicyComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatechangePolicyComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(DatechangePolicyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
