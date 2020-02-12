import { Directive, forwardRef } from '@angular/core';
import {
    Validator,
    NG_VALIDATORS,
    FormControl,
    ValidationErrors,
} from '@angular/forms';

@Directive({
    selector: '[appNumberValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => NumberValidator),
            multi: true,
        },
    ],
})
export class NumberValidator implements Validator {
    validate(control: FormControl): ValidationErrors | null {
        const reg = /^[0-9]*$/;
        const isValid = reg.test(control.value);
        return isValid
            ? null
            : {
                  number: {
                      invalid: true,
                      message: 'this value should be a number',
                  },
              };
    }
}
