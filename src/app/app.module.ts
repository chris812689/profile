import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { MeComponent } from './about/me/me.component';

import { SkillsComponent } from './about/skills/skills.component';
import { CompletedComponent } from './about/education/completed/completed.component';
import { UncompletedComponent } from './about/education/uncompleted/uncompleted.component';
import { EducationComponent } from './about/education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    AboutComponent,
    FooterComponent,
    MeComponent,
    SkillsComponent,
    CompletedComponent,
    UncompletedComponent,
    EducationComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MaterialModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
