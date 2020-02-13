import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Author, Course } from 'src/app/app.model';

import { authors } from '../../../fakeData';
import { CustomValidators } from '../../shared/validators';

@Component({
    selector: 'app-reactive-form',
    templateUrl: './reactive-form.component.html',
    styleUrls: ['./reactive-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormComponent implements OnInit {
    courseForm: FormGroup;
    authors: Author[];
    course: Course;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.course = Course.getInitialState();
        this.fetchAuthors();
        this.initializeForm();

        // this.courseAuthorsArray = this.courseForm.controls.authors.value;
    }

    initializeForm(): void {
        this.courseForm = this.fb.group({
            title: [null, Validators.required],
            description: [null],
            creationDate: [
                null,
                [
                    Validators.required,
                    // @note - important to know that the backslash \ has to be escaped,
                    // use double backslash instead
                    Validators.pattern(
                        '^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/](19|20)\\d\\d$'
                    ),
                ],
            ],
            duration: [null, [Validators.required, CustomValidators.number]],
            authors: [null, Validators.required],
        });

        this.courseForm.patchValue(this.course);
    }

    fetchAuthors(): void {
        this.authors = Object.values(authors.byId);
    }

    onSubmit(): void {
        console.log(this.courseForm);
    }

    onReset(): void {
        this.courseForm.reset();
    }
}
