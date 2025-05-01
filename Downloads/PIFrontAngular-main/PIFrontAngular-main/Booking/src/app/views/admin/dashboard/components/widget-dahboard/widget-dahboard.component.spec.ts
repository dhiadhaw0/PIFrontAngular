import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WidgetDahboardComponent } from './widget-dahboard.component'

describe('WidgetDahboardComponent', () => {
  let component: WidgetDahboardComponent
  let fixture: ComponentFixture<WidgetDahboardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetDahboardComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(WidgetDahboardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
