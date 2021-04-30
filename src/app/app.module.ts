import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './shared/movie/movie-card/movie-card.component';
import { MovieListComponent } from './shared/movie/movie-list/movie-list.component';
import { MovieSpotlightComponent } from './shared/movie/movie-spotlight/movie-spotlight.component';
import { HomeComponent } from './pages/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuNavComponent } from './shared/menus/menu-nav/menu-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MovieListTemplateComponent } from './shared/movie/movie-list-template/movie-list-template.component';
import { FavouriteIconComponent } from './shared/favourite-icon/favourite-icon/favourite-icon.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { MovieDetailComponent } from './shared/movie/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieSpotlightComponent,
    HomeComponent,
    MenuNavComponent,
    MovieListTemplateComponent,
    FavouriteIconComponent,
    DetailPageComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
