import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CompareListingComponent } from './compare-listing.component'

describe('CompareListingComponent', () => {
  let component: CompareListingComponent
  let fixture: ComponentFixture<CompareListingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareListingComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CompareListingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
