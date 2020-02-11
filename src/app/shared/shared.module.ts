import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthorsCustomSelectComponent } from './components/authors-custom-select/authors-custom-select.component';

@NgModule({
    declarations: [AuthorsCustomSelectComponent],
    imports: [CommonModule, AppRoutingModule, MatTabsModule, FormsModule],
    exports: [
        AppRoutingModule,
        MatTabsModule,
        FormsModule,
        AuthorsCustomSelectComponent,
    ],
})
export class SharedModule {}
