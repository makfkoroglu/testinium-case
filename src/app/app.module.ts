import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailViewComponent } from './user-detail-view/user-detail-view.component';
import { HomeRootComponent } from './home-root/home-root.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    routingComponents,
    UserDetailViewComponent,
    HomeRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
