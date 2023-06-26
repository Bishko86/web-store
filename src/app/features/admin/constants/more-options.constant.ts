import { MatIcon } from "src/app/core/enums/material-icon.enum";
import { MoreOptionAction } from "src/app/core/enums/more-option-action.enum";
import { MoreOptions } from "src/app/core/models/more-options.model";

export const CategoryOptions: MoreOptions[] = [
  {
    icon: MatIcon.EDIT,
    text: 'Edit Category',
    action: MoreOptionAction.Update
  },
  {
    icon: MatIcon.ADD_SHOPPING_CART,
    text: 'Add product to',
    action: MoreOptionAction.Add
  },
  {
    icon: MatIcon.DELETE,
    text: 'Delete Category',
    action: MoreOptionAction.Delete
  },
];

export const UserGridOptions: MoreOptions[] = [
  {
    icon: MatIcon.PROFILE,
    text: 'User Profile',
    action: MoreOptionAction.Open,
  },
  {
    icon: MatIcon.ADD_SHOPPING_CART,
    text: 'User orders',
    action: MoreOptionAction.ShowUp,
  },
  {
    icon: MatIcon.DELETE,
    text: 'Delete User',
    action: MoreOptionAction.Delete,
  },
];
