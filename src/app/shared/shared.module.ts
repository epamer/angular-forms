import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthorsCustomSelectComponent } from './components/authors-custom-select/authors-custom-select.component';
import { NumberValidator } from './directives/validators/number.validator..directive';

@NgModule({
    declarations: [AuthorsCustomSelectComponent, NumberValidator],
    imports: [CommonModule, MatTabsModule, FormsModule, ReactiveFormsModule],
    exports: [
        MatTabsModule,
        NumberValidator,
        AuthorsCustomSelectComponent,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class SharedModule {}
