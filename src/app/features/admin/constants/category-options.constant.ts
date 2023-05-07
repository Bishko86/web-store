import { MatIcon } from "src/app/core/enums/material-icon.enum";
import { MoreOptionAction } from "src/app/core/enums/more-option-action.enum";
import { MoreOptions } from "src/app/core/models/more-options.model";

export const CategoryOptions: MoreOptions[] = [
    { icon: MatIcon.EDIT, text: 'Edit Category', action: MoreOptionAction.Update },
    { icon: MatIcon.ADD_SHOPPING_CART, text: 'Add product to', action: MoreOptionAction.Add },
    { icon: MatIcon.DELETE, text: 'Delete Category', action: MoreOptionAction.Delete },
]
