import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ExplorePalcesComponent } from './explore-palces.component'

describe('ExplorePalcesComponent', () => {
  let component: ExplorePalcesComponent
  let fixture: ComponentFixture<ExplorePalcesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplorePalcesComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ExplorePalcesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
