import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { filter, fromEvent, skip, Subject, take } from 'rxjs';

@Component({
  selector: 'app-update-category',
  templateUrl: './rename-category.component.html',
  styleUrls: ['./rename-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateCategoryComponent implements OnInit {
  private unsubscribe: Subject<void> = new Subject<void>();
  private get element() {
    return this.host.nativeElement;
  }
 
  public categoryName: string = '';
  public editMode$ = new Subject<boolean>();

  @Output() toViewMode = new EventEmitter<boolean>();
  @Output() update = new EventEmitter<string>();

  constructor(private host: ElementRef) {}

  ngOnInit(): void {
    this.editModeHandler();
  }

  private editModeHandler(): void {
    fromEvent(document, 'click')
      .pipe(
        skip(1),
        filter(({ target }) => !this.element.contains(target)),
        take(1)
      )
      .subscribe(() => this.viewMode());
  }

  viewMode(): void {
    this.toViewMode.emit(true);
    this.categoryName = '';
  }

  updateCategory(): void {
    const inputValue = this.categoryName.trim();
    if (inputValue) {
      this.update.emit(inputValue);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
