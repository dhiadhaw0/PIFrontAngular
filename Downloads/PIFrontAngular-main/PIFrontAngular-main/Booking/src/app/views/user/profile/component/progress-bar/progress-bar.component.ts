import { Component, OnInit } from '@angular/core'
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap'
import AOS from 'aos'

@Component({
  selector: 'profile-progress-bar',
  standalone: true,
  imports: [NgbProgressbarModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent implements OnInit {
  ngOnInit(): void {
    AOS.init()
  }
}
