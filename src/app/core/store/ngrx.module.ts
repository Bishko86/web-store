import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './reducers/app.reducer';
import { AuthEffects } from './effects/auth.effects';
import { UsersEffects } from './effects/users.effects';
import { CategoryEffects } from './effects/category.effects';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects, UsersEffects, CategoryEffects]),
    StoreDevtoolsModule.instrument(),
  ]
})
export class NgRxModule { }
