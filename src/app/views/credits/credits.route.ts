import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { BookingComponent } from './booking'
import { ApplicationComponent } from './application/application.component'
import { BasicInfoComponent } from './application/wizard/basic-info/basic-info.component'
import { UserTypeComponent } from './application/wizard/user-type/user-type.component'
import { PackSelectionComponent } from './application/wizard/pack-selection/pack-selection.component'
import { FinancialInfoComponent } from './application/wizard/financial-info/financial-info.component'
import { GuarantorInfoComponent } from './application/wizard/guarantor-info/guarantor-info.component'
import { ReviewComponent } from './application/wizard/review/review.component'
import { ConfirmationComponent } from './application/wizard/confirmation/confirmation.component'

export const CREDIT_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent, data: { title: 'Credit - Home' } },
  { path: 'booking', component: BookingComponent, data: { title: 'Credit - Application' } },
  {
    path: 'application',
    component: ApplicationComponent,
    children: [
      { path: 'basic-info', component: BasicInfoComponent, data: { title: 'Credit - Basic Information' } },
      { path: 'user-type', component: UserTypeComponent, data: { title: 'Credit - User Type' } },
      { path: 'pack-selection', component: PackSelectionComponent, data: { title: 'Credit - Pack Selection' } },
      { path: 'financial-info', component: FinancialInfoComponent, data: { title: 'Credit - Financial Information' } },
      { path: 'guarantor-info', component: GuarantorInfoComponent, data: { title: 'Credit - Guarantor Information' } },
      { path: 'review', component: ReviewComponent, data: { title: 'Credit - Review Application' } },
      { path: 'confirmation', component: ConfirmationComponent, data: { title: 'Credit - Application Confirmation' } },
      { path: '', redirectTo: 'basic-info', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
] 