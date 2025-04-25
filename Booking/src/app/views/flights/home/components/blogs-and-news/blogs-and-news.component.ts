import { Component } from '@angular/core'
import { blogs } from '../../data'
import { RouterLink } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'flights-home-blogs-and-news',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './blogs-and-news.component.html',
  styles: ``,
})
export class BlogsAndNewsComponent {
  flightBlogs = blogs
}
