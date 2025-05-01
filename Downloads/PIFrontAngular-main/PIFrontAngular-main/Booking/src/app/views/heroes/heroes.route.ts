import { Route } from '@angular/router'
import { InlineFormComponent } from './inline-form/inline-form.component'
import { MultipleSearchComponent } from './multiple-search/multiple-search.component'
import { ImageGalleryComponent } from './image-gallery/image-gallery.component'
import { SplitComponent } from './split/split.component'

export const HEROES_ROUTES: Route[] = [
  {
    path: 'inline-form',
    component: InlineFormComponent,
    data: { title: 'Hero - Inline Form' },
  },
  {
    path: 'multiple-search',
    component: MultipleSearchComponent,
    data: { title: 'Hero - Multiple Search' },
  },
  {
    path: 'image-gallery',
    component: ImageGalleryComponent,
    data: { title: 'Hero - Image Gallery' },
  },
  {
    path: 'split',
    component: SplitComponent,
    data: { title: 'Hero - Split' },
  },
]
