import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './reducers/app.reducer';
import { UserEffects } from './effects/user.effects';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument(),
  ]
})
export class NgRxModule { }
