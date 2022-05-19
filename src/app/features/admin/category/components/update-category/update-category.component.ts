import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { filter, fromEvent, skip, Subject, take } from 'rxjs';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateCategoryComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  private get element() {
    return this.host.nativeElement;
  }

  public editMode$ = new Subject<boolean>();

  @Input("name") categoryName: string;
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
      ).subscribe(() => this.viewMode());
  }

  viewMode(): void {
    this.toViewMode.emit(true);
  }

  updateCategory(): void {
    const inputValue = this.categoryName.trim();
    if (inputValue) {
      this.update.emit(inputValue);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
