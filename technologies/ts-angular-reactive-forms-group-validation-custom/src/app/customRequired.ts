import { AbstractControl, ValidationErrors } from "@angular/forms";

export function customRequired(control: AbstractControl) : ValidationErrors | null {

    const value = control.value;

    if (value == null || value == '') {
        return {customRequired: true}
    }

    return null;

}