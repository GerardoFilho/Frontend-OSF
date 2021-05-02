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
import { LazyPipe } from './pipes/lazy.pipe';
import { OpeningComponent } from './pages/opening/opening.component';
import { AngularFireModule } from '@angular/fire';
import { LoginComponent } from './pages/login/login.component'
import { FirebaseService } from './services/firebase.service';
import {MatFormFieldModule} from '@angular/material/form-field';

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
    MovieDetailComponent,
    LazyPipe,
    OpeningComponent,
    LoginComponent
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
    MatListModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBSqCnTwXBNTK7eVpTOgGIwXBl-zuUMOSs",
      authDomain: "epic-movie-a0dc3.firebaseapp.com",
      projectId: "epic-movie-a0dc3",
      storageBucket: "epic-movie-a0dc3.appspot.com",
      messagingSenderId: "10135547380",
      appId: "1:10135547380:web:bbbff5a236e5db00b25da1"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
