import { credits, currentYear } from '@/app/store'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'user-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="bg-dark p-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-4">
            <div class="text-center text-md-start mb-3 mb-md-0">
              <a routerLink="/">
                <img
                  class="h-30px"
                  src="assets/images/logo-light.svg"
                  alt="logo"
                />
              </a>
            </div>
          </div>

          <div class="col-md-4">
            <div class="text-body-secondary text-primary-hover">
              Copyrights ©
              {{ currentYear }} Booking. Build by
              <a href="{{ creditsBy.website }}" class="text-body-secondary">{{
                creditsBy.name
              }}</a
              >.
            </div>
          </div>

          <div class="col-md-4">
            <ul class="list-inline mb-0 text-center text-md-end">
              <li class="list-inline-item">
                <a href="javascript:void(0);"
                  ><i class="text-white fab fa-facebook me-1"></i
                ></a>
              </li>
              <li class="list-inline-item ms-2">
                <a href="javascript:void(0);"
                  ><i class="text-white fab fa-instagram me-1"></i
                ></a>
              </li>
              <li class="list-inline-item ms-2">
                <a href="javascript:void(0);"
                  ><i class="text-white fab fa-linkedin-in me-1"></i
                ></a>
              </li>
              <li class="list-inline-item ms-2">
                <a href="javascript:void(0);"
                  ><i class="text-white fab fa-twitter"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  currentYear = currentYear
  creditsBy = credits
}
