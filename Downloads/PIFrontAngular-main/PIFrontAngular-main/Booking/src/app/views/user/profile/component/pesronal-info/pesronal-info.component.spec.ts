import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PesronalInfoComponent } from './pesronal-info.component'

describe('PesronalInfoComponent', () => {
  let component: PesronalInfoComponent
  let fixture: ComponentFixture<PesronalInfoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesronalInfoComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(PesronalInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
