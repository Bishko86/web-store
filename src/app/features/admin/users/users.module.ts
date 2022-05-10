import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UserItemComponent } from './components/user-item/user-item.component';



@NgModule({
  declarations: [UsersComponent, UserItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: UsersComponent}])
  ]
})
export class UsersModule { }
