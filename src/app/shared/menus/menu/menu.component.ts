import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
    
  }

  header__variable = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 125 || document.documentElement.scrollTop > 125){
      this.header__variable = true;
    } else {
      this.header__variable = false;
    }
  }
  

}
