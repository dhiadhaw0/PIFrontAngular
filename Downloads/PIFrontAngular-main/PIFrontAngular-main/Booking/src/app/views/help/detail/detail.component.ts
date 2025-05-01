import { Component, inject } from '@angular/core'
import { BannerComponent } from './components/banner/banner.component'
import { ArticleComponent } from './components/article/article.component'
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
  type UntypedFormGroup,
} from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [BannerComponent, ArticleComponent],
  templateUrl: './detail.component.html',
  styles: ``,
})
export class DetailComponent {}
