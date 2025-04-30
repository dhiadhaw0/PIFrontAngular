import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ResortComponent } from './resort.component'

describe('ResortComponent', () => {
  let component: ResortComponent
  let fixture: ComponentFixture<ResortComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResortComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ResortComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
