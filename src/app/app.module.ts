import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RocketForm } from './components/rocket-form/rocket.form.component';
import { AdBannerComponent } from './components/rocket-form-base-element/rocket.form.base.element.component';
import { AdDirective } from './components/rocket-form-base-element/ad.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    RocketForm,
    AdBannerComponent,
    AdDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}