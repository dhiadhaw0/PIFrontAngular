import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AddMinimalComponent } from './add-minimal.component'

describe('AddMinimalComponent', () => {
  let component: AddMinimalComponent
  let fixture: ComponentFixture<AddMinimalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMinimalComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(AddMinimalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
