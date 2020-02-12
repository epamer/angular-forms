import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Author, Course } from '../../app.model';
import { authors } from '../../../fakeData';

@Component({
    selector: 'app-template-driven-form',
    templateUrl: './template-driven-form.component.html',
    styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
    authors: Author[] = [];
    course: Course;

    constructor() {}

    ngOnInit() {
        this.fetchAuthors();
        // @note - initial values whose values neither null nor '' makes formControl dirty
        // and may negatively affect validation process.
        // That's why initial value of authors can't be []
        this.course = Course.getInitialState();
    }

    onSubmit(form: FormControl): void {
        console.log(form);
    }

    fetchAuthors(): void {
        // fake implementation of fetch
        this.authors = authors.allIdis.map(id => authors[id]);
    }
}
