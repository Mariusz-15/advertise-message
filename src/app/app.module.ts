import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdvertiseMessageComponent } from './advertise-message/advertise-message.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AdvertiseMessageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ RouterModule]
})
export class AppModule { }
