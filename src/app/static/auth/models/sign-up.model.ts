import { AbstractControl } from "@angular/forms";
import { SignInFormModel } from "./sign-in.model";

export interface SignUpFormModel extends SignInFormModel {
    username: AbstractControl<string>;
    confirmPassword: AbstractControl<string>;
}
