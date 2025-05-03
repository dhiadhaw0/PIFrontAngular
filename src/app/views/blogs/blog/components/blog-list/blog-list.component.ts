import { Component } from '@angular/core'
import { blogs } from '../../data'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'blog-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './blog-list.component.html',
  styles: ``,
})
export class BlogListComponent {
  blogData = blogs
}
