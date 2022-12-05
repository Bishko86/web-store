import { Injectable, Injector } from '@angular/core';

@Injectable()
export class ExtraModuleInjector {
  private static injector: Injector;

  public static get(token: any) {
    console.error(ExtraModuleInjector.injector);

    if (ExtraModuleInjector.injector) {
      return ExtraModuleInjector.injector.get(token);
    }
  }

  constructor(public injector: Injector) {
    ExtraModuleInjector.injector = injector;
  }
}
