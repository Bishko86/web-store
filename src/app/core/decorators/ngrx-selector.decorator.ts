import { select, Store } from '@ngrx/store';
import { ExtraModuleInjector } from '../injector/injector.module';

export function State(selectorFunc: any) {
  const store = ExtraModuleInjector.get(Store);
  
  return function<Type> (target: Type, key: string) {
    let value;
    const getter = function () {
      return store.pipe(select(selectorFunc));
    };

    const setter = function() {
      store.pipe(select(selectorFunc));
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}
