import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { GitOperationsService } from './git-operations.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GitOperationsService
  ],
  bootstrap: [],
  entryComponents : [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector){
    const el = createCustomElement(AppComponent, {injector});
    customElements.define('momentum-element', el);
  }
  
  ngDoBootstrap() {}
}
