import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateDrivenFormComponent } from './form/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { SharedModule } from './shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        TemplateDrivenFormComponent,
        ReactiveFormComponent,
        NavComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
