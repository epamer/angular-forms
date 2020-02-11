import { Component, Input, forwardRef } from '@angular/core';

import { Author } from '../../../app.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'app-authors-custom-select',
    templateUrl: './authors-custom-select.component.html',
    styleUrls: ['./authors-custom-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AuthorsCustomSelectComponent),
            multi: true,
        },
    ],
})
export class AuthorsCustomSelectComponent implements ControlValueAccessor {
    @Input() authors: Author[];
    courseAuthors: Author[];
    onChange: (value) => {};
    onTouched: () => {};

    private _value: number[] = [];

    set value(value: number[]) {
        this._value = [...value];
        this.notifyValueChange();
    }

    get value(): number[] {
        return this._value;
    }

    notifyValueChange(): void {
        this.onChange(this.value);
        this.courseAuthors = this.value.map(id => this.getAuthorById(id));
    }

    writeValue(value: number[]): void {
        if (value) {
            this.value = value;
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    onSelectHandler(event: any): void {
        const id = +event.target.value;
        if (this.value.includes(id)) {
            return;
        }
        this.value = [...this.value, id];
        event.target.value = '';
    }

    onRemoveAuthor(id: number): void {
        this.value = this.value.filter(item => item !== id);
    }

    isDisabled(id: number): boolean {
        if (this.value) {
            return this.value.includes(id);
        }
        return false;
    }
    getAuthorById(id: number): Author {
        return this.authors.find(author => author.id === id);
    }
}
