import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TopCategoryComponent } from './top-category.component'

describe('TopCategoryComponent', () => {
  let component: TopCategoryComponent
  let fixture: ComponentFixture<TopCategoryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCategoryComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TopCategoryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
