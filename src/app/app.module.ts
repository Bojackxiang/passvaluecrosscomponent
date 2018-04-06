import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import modules
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
// import service
import { SwitchService } from './sharedService/switch.service';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [SwitchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
