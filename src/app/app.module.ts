import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { SliderComponent } from './components/slider/slider.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './shared/movie/movie-card/movie-card.component';

import { MovieListComponent } from './shared/movie/movie-list/movie-list.component';
import { MovieSpotlightComponent } from './shared/movie/movie-spotlight/movie-spotlight.component';
import { MenuComponent } from './shared/menus/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuSidenavComponent } from './shared/menus/menu-sidenav/menu-sidenav.component';
import { FormsModule } from '@angular/forms'
import { LayoutModule } from '@angular/cdk/layout';
import { MenuNavComponent } from './shared/menus/menu-nav/menu-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MovieListTemplateComponent } from './shared/movie/movie-list-template/movie-list-template.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieSpotlightComponent,
    MenuComponent,
    HomeComponent,
    MenuSidenavComponent,
    MenuNavComponent,
    MovieListTemplateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
