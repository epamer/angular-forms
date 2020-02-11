import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
    declarations: [TemplateDrivenFormComponent, ReactiveFormComponent],
    imports: [CommonModule, SharedModule],
    exports: [TemplateDrivenFormComponent, ReactiveFormComponent],
})
export class FormModule {}
