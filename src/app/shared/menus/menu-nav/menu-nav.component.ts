import { FirebaseService } from './../../../services/firebase.service';
import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.scss']
})
export class MenuNavComponent {
  @Output() isLogout = new EventEmitter<void>()

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public firebaseService : FirebaseService) {}

  header__variable = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 125 || document.documentElement.scrollTop > 125){
      this.header__variable = true;
    } else {
      this.header__variable = false;
    }
  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

}

