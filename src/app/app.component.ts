import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ExtraModuleInjector } from './core/injector/injector.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private moduleInjector: ExtraModuleInjector) {}
}
