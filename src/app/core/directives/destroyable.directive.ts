import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appDestroyable]'
})
export class DestroyableDirective implements OnDestroy{

  protected readonly destroy$: Subject<void> = new Subject();

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
