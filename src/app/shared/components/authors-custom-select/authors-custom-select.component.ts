import {
    Component,
    Input,
    forwardRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
} from '@angular/core';

import { Author } from '../../../app.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'app-authors-custom-select, .app-authors-select',
    templateUrl: './authors-custom-select.component.html',
    styleUrls: ['./authors-custom-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AuthorsCustomSelectComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsCustomSelectComponent implements ControlValueAccessor {
    @Input() authors: Author[];

    courseAuthors: Author[];

    onChange: (value) => {};
    onTouched: () => {};

    constructor(private _cd: ChangeDetectorRef) {}

    private _value: number[] = [];

    set value(value: number[]) {
        this._value = value;
        this.setValueToView(value);
    }

    get value(): number[] {
        return this._value;
    }

    setValueToView(value: number[]): void {
        this.courseAuthors = value.map(id => this.getAuthorById(id));
        // @note - there is two reason to use markForCheck:
        // 1) onPush strategy
        // 2) component has reference for formControl but haven't reference for it value.
        // That's why changeDetection mechanism can't detect value changes.
        this._cd.markForCheck();
    }

    // @note - this method used to set value from model to form control
    // this method is called when the FormControl is instantiated and when patchValue or setValue is called
    writeValue(value: number[]): void {
        this.value = value || [];
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    onSelectHandler(event: any): void {
        const id = +event.target.value;
        this.value = [...this.value, id];

        // @note - this method used to set value from template to model and
        //  affect dirty/pristine state of form control
        this.onChange(this.value);

        event.target.value = '';
    }

    onRemoveAuthor(id: number): void {
        this.value = this.value.filter(item => item !== id);
        this.onChange(this.value);
    }

    onBlur() {
        this.onTouched();
    }

    isDisabled(id: number): boolean {
        return this.value.includes(id);
    }

    getAuthorById(id: number): Author {
        return this.authors.find(author => author.id === id);
    }
}
