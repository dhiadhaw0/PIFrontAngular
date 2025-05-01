import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AppsLinkComponent } from './apps-link.component'

describe('AppsLinkComponent', () => {
  let component: AppsLinkComponent
  let fixture: ComponentFixture<AppsLinkComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppsLinkComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AppsLinkComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
