import { Component } from '@angular/core'
import { ourStories } from '../../data'

@Component({
  selector: 'about-our-story',
  standalone: true,
  imports: [],
  templateUrl: './our-story.component.html',
  styles: ``,
})
export class OurStoryComponent {
  storyList = ourStories
}
