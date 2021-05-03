import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail-page/:id', component: DetailPageComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})

export class AppRoutingModule { }