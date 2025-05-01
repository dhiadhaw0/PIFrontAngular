import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StatisticCardsComponent } from './statistic-cards.component'

describe('StatisticCardsComponent', () => {
  let component: StatisticCardsComponent
  let fixture: ComponentFixture<StatisticCardsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticCardsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(StatisticCardsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
