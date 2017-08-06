import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {ViewsModule} from './views/views.module';
import {CommonsModule} from './components/common/commons.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule,
    CommonsModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
