import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import {
  DROPZONE_CONFIG,
  DropzoneModule,
  type DropzoneConfigInterface,
} from 'ngx-dropzone-wrapper'

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 5,
  acceptedFiles: 'image/*',
}

@Component({
  selector: 'add-minimal-cab-detail',
  standalone: true,
  imports: [SelectFormInputDirective, DropzoneModule],
  templateUrl: './cab-detail.component.html',
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
  ],
})
export class CabDetailComponent {
  public dropzoneConfig: DropzoneConfigInterface = {
    clickable: true,
    addRemoveLinks: true,
    maxFiles: 5,
  }
}
