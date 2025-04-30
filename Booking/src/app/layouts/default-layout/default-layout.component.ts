import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [RouterModule],
  template: `
    <!-- 
  To add something to all pages which uses default layout,
  please use this default layout for that 
  -->
    <router-outlet />
  `,
})
export class DefaultLayoutComponent {}
