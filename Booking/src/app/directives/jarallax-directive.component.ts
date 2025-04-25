import {
  Directive,
  Input,
  type AfterViewInit,
  ElementRef,
  type OnInit,
  type OnDestroy,
} from '@angular/core'
import { jarallax, jarallaxVideo, type JarallaxOptions } from 'jarallax'

@Directive({
  selector: '[ngJarallax]',
  standalone: true,
})
export class JarallaxDirective implements AfterViewInit, OnInit, OnDestroy {
  @Input('config') config?: JarallaxOptions

  constructor(private eleRef: ElementRef) {}

  ngOnInit(): void {
    jarallaxVideo()
  }

  ngAfterViewInit(): void {
    if (this.eleRef.nativeElement) {
      jarallax(this.eleRef.nativeElement, {
        ...this.config,
      })
    }
  }

  ngOnDestroy(): void {
    if (this.eleRef.nativeElement) {
      jarallax(this.eleRef.nativeElement, 'destroy')
    }
  }
}
