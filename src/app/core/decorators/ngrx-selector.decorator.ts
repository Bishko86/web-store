import { select, Store } from '@ngrx/store';
import { ExtraModuleInjector } from '../injector/injector.module';

export function State(selectorFunc: any) {
  const store = ExtraModuleInjector.get(Store);
  
  return function<Type> (target: Type, key: string) {
    const getter = function () {
      return store.pipe(select(selectorFunc));
    };

    Object.defineProperty(target, key, {
      get: getter,
    });
  };
}
