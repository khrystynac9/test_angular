import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { RelaxComponent } from './relax/relax.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    RelaxComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'work',
        component: WorkComponent
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'relax',
        component: RelaxComponent,
      }
    ])
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
