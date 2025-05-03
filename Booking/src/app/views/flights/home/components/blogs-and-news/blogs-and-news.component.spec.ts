import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BlogsAndNewsComponent } from './blogs-and-news.component'

describe('BlogsAndNewsComponent', () => {
  let component: BlogsAndNewsComponent
  let fixture: ComponentFixture<BlogsAndNewsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogsAndNewsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(BlogsAndNewsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
