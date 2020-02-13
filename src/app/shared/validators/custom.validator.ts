import { ValidationErrors, AbstractControl } from '@angular/forms';

export class CustomValidators {
    static number(control: AbstractControl): ValidationErrors | null {
        const reg = /^[0-9]*$/;
        const isValid = reg.test(control.value);

        return isValid
            ? null
            : {
                  number: {
                      message: 'this value should be a number',
                  },
              };
    }
}
