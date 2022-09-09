import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';


const appRoute: Routes =[
  {path:"",component:HomeComponent},
  // {path:"",redirectTo:"Home",pathMatch:'full'},
  {path:"Home",component: HomeComponent},
  {path:"About",component: AboutComponent},
  {path:"Contact",component: ContactComponent},
  {path:"Courses",component: CoursesComponent},
  {path:"**",component: ErrorComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
