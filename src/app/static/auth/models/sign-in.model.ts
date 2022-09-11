import { AbstractControl } from "@angular/forms";

export interface SignInFormModel {
    email: AbstractControl<string>;
    password: AbstractControl<string>;
}
