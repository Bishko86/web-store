import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { appReducer } from './reducers/app.reducer';
import { AuthEffects } from './effects/auth.effects';
import { AdminEffects } from './effects/admin.effects';
import { CategoryEffects } from './effects/category.effects';
import { ProductEffects } from './effects/product.effects';
import { ExtraModuleInjector } from '../injector/injector.module';
import { UserEffects } from './effects/user.effects';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects, UserEffects, AdminEffects, CategoryEffects, ProductEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [ExtraModuleInjector]
})
export class NgRxModule { }
