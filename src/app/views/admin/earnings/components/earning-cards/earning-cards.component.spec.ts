import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EarningCardsComponent } from './earning-cards.component'

describe('EarningCardsComponent', () => {
  let component: EarningCardsComponent
  let fixture: ComponentFixture<EarningCardsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarningCardsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(EarningCardsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
