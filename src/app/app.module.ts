import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LottieModule, LottieCacheModule } from 'ngx-lottie';
import {CommonModule} from "@angular/common";
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    LottieCacheModule.forRoot(),
    BrowserAnimationsModule,
    AppMaterialModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
