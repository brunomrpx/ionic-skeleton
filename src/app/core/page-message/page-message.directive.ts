import { Directive, Input, ElementRef, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { PageMessageComponent } from './page-message.component';
import { BehaviorSubject } from 'rxjs';

interface PageMessageOptions {
  show: boolean;
  tryAgain: boolean;
  message: string;
}

@Directive({
  selector: '[pageMessage]'
})
export class PageMessageDirective {
  public pageMessageOptions = new BehaviorSubject<PageMessageOptions>({
    show: false,
    tryAgain: false,
    message: null
  });

  private pageMessageComponentRef: ComponentRef<PageMessageComponent>;

  constructor(private element: ElementRef, private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.pageMessageOptions.subscribe(options => {
      if (options.show) {
        this.showPageMessage(options);
        return;
      }

      this.hidePageMessage();
    });
  }

  showPageMessage(options: PageMessageOptions) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(PageMessageComponent);

    this.pageMessageComponentRef = this.viewContainer.createComponent(componentFactory);
    this.pageMessageComponentRef.instance.message = options.message;
    this.element.nativeElement.style.display = 'none';
  }

  hidePageMessage() {
    if (this.pageMessageComponentRef) {
      this.pageMessageComponentRef.destroy();
    }

    this.element.nativeElement.style.display = 'block';
  }
}
