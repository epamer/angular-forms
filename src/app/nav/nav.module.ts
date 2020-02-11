import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { SharedModule } from '../shared/shared.module';
import { FormModule } from '../form/form.module';

@NgModule({
    declarations: [NavComponent],
    imports: [CommonModule, SharedModule, FormModule],
    exports: [NavComponent],
})
export class NavModule {}
