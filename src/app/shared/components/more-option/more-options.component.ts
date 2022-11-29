import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatIcon } from 'src/app/core/enums/material-icon.enum';
import { MoreOptionAction } from 'src/app/core/enums/more-option-action.enum';
import { MoreOptions } from 'src/app/core/models/more-options.model';

@Component({
  selector: 'app-more-options',
  templateUrl: './more-options.component.html',
  styleUrls: ['./more-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreOptionsComponent {
  @Input() moreOptions: MoreOptions[];

  @Output() public add: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onOpen: EventEmitter<void> = new EventEmitter<void>();
  @Output() public onClose: EventEmitter<void> = new EventEmitter<void>();
  @Output() public update: EventEmitter<void> = new EventEmitter<void>();
  @Output() public delete: EventEmitter<void> = new EventEmitter<void>();
  @Output() public showUp: EventEmitter<void> = new EventEmitter<void>();

  public readonly moreOptionsIcon = MatIcon.MORE_OPTIONS;

  public emitAction(action: MoreOptionAction): void {
    switch (action) {
      case MoreOptionAction.Add:
        this.add.emit();
        break;
      case MoreOptionAction.Open:
        this.onOpen.emit();
        break;
      case MoreOptionAction.Close:
        this.onClose.emit();
        break;
      case MoreOptionAction.Update:
        this.update.emit();
        break;
      case MoreOptionAction.Delete:
        this.delete.emit();
        break;
      case MoreOptionAction.ShowUp:
        this.showUp.emit();
        break;
    }
  }
}
