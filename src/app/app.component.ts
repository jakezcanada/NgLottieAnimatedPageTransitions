import {AfterViewInit, Component} from '@angular/core';
import {Router} from "@angular/router";

import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  constructor(private _router: Router) { }
  ngAfterViewInit() {
    this.openDoors();
  }
  currentNav: string = this._router.url.replace("/","");
  showClosing: boolean = false;
  showOpening: boolean = true;
  isTransitioning: boolean = true;
  optionsOpen: AnimationOptions = {
    path: '/assets/Doors Open.json',
    loop: false,
    autoplay: false
  };
  optionsClose: AnimationOptions = {
    path: '/assets/Doors Close.json',
    loop: false,
    autoplay: false
  };
  optionsLamp: AnimationOptions = {
    path: '/assets/Lamp.json'
  }
  title = 'ProfileWebsite';
  navigateTo(link: string){
    if (link !== this.currentNav && !this.isTransitioning){
      this.closeDoors()
      this.currentNav = link
    }
  }
  closeDoors(): void {
    this.showClosing = true;
    this.showOpening = false;
    this.optionsClose = {
      ...this.optionsClose, // In case you have other properties that you want to copy
      autoplay: true
    };
  }
  openDoors(): void {
    this.showOpening = true;
    this.optionsOpen = {
      ...this.optionsOpen, // In case you have other properties that you want to copy
      autoplay: true
    };
  }
  doNav(){
    console.log('SHIT')
    this._router.navigate([this.currentNav]);
    this.openDoors();
  }
}
