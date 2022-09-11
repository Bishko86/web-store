import { AbstractControl } from "@angular/forms";

export const getErrorMessage = (control: AbstractControl) => {
    if (control.hasError('required')) {
        return 'You must enter a value';
    }
    return control.hasError('email') ? 'Not a valid email' : '';
}
