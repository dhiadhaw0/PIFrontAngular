import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ImportantInformationComponent } from './important-information.component'

describe('ImportantInformationComponent', () => {
  let component: ImportantInformationComponent
  let fixture: ComponentFixture<ImportantInformationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportantInformationComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ImportantInformationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
