import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CabalertComponent } from './cabalert.component'

describe('CabalertComponent', () => {
  let component: CabalertComponent
  let fixture: ComponentFixture<CabalertComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabalertComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CabalertComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
