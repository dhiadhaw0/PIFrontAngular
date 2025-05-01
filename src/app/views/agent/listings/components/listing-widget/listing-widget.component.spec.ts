import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ListingWidgetComponent } from './listing-widget.component'

describe('ListingWidgetComponent', () => {
  let component: ListingWidgetComponent
  let fixture: ComponentFixture<ListingWidgetComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingWidgetComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ListingWidgetComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
