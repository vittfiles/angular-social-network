import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';

export function confirmPasswordValidator(): ValidatorFn{
    return (
        control: AbstractControl
    ): ValidationErrors | null => {
    return control.value.password1 === control.value.password2
        ? null
        : { PasswordNoMatch: true };
    };
}