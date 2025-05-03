import { Component } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BlogListComponent } from './components/blog-list/blog-list.component'
import { LatestArticleComponent } from './components/latest-article/latest-article.component'
import { NewsletterComponent } from './components/newsletter/newsletter.component'
import { Footer1Component } from './components/footer1/footer1.component'

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    TopbarComponent,
    BlogListComponent,
    LatestArticleComponent,
    NewsletterComponent,
    Footer1Component,
  ],
  templateUrl: './blog.component.html',
  styles: ``,
})
export class BlogComponent {}
