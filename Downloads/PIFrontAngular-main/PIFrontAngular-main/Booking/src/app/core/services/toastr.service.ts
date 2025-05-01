import { Injectable, TemplateRef } from '@angular/core'

export type Toast = {
  content: string
  classname?: string
  delay?: number
  textOrTpl?: string
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: Toast[] = []

  show(toast: Toast) {
    this.toasts.push(toast)
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((t) => t !== toast)
  }
}
