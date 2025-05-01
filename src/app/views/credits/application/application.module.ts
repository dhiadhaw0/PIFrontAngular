import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ApplicationComponent } from './application.component';
import { BasicInfoComponent } from './wizard/basic-info/basic-info.component';
import { UserTypeComponent } from './wizard/user-type/user-type.component';
import { PackSelectionComponent } from './wizard/pack-selection/pack-selection.component';
import { FinancialInfoComponent } from './wizard/financial-info/financial-info.component';
import { GuarantorInfoComponent } from './wizard/guarantor-info/guarantor-info.component';
import { ReviewComponent } from './wizard/review/review.component';
import { ConfirmationComponent } from './wizard/confirmation/confirmation.component';
import { CreditApplicationService } from '../services/credit-application.service';

@NgModule({
  declarations: [
    ApplicationComponent,
    BasicInfoComponent,
    UserTypeComponent,
    PackSelectionComponent,
    FinancialInfoComponent,
    GuarantorInfoComponent,
    ReviewComponent,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ApplicationComponent,
        children: [
          { path: 'basic-info', component: BasicInfoComponent },
          { path: 'user-type', component: UserTypeComponent },
          { path: 'pack-selection', component: PackSelectionComponent },
          { path: 'financial-info', component: FinancialInfoComponent },
          { path: 'guarantor-info', component: GuarantorInfoComponent },
          { path: 'review', component: ReviewComponent },
          { path: 'confirmation', component: ConfirmationComponent },
          { path: '', redirectTo: 'basic-info', pathMatch: 'full' }
        ]
      }
    ])
  ],
  providers: [
    CreditApplicationService
  ],
  exports: [
    ApplicationComponent
  ]
})
export class ApplicationModule { } 