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
  showClosing: boolean = false;
  showOpening: boolean = true;
  isTransitioning: boolean = true;
  currentNav: string = "";
  links: string[] = ['home', 'about', 'projects', 'contact'];
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
  constructor(private _router: Router) { }
  ngAfterViewInit() {
    setTimeout(()=> {
      this.openDoors();
      this.currentNav = this._router.url.replace("/","");
      console.log(this.currentNav);
      }, 500);
  }
  navigateTo(link: string){
    this.currentNav = this._router.url.replace("/","");
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
    this._router.navigate([this.currentNav]).then(() => {

    });
    this.openDoors();
  }

  protected readonly console = console;
  protected readonly alert = alert;
}
