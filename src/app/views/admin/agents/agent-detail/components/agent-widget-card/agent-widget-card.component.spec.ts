import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AgentWidgetCardComponent } from './agent-widget-card.component'

describe('AgentWidgetCardComponent', () => {
  let component: AgentWidgetCardComponent
  let fixture: ComponentFixture<AgentWidgetCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentWidgetCardComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AgentWidgetCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
