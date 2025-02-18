import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PostsComponent } from './Components/posts/posts.component';
import { PostsContainerComponent } from './Components/posts-container/posts-container.component';
import { FormsModule } from '@angular/forms';
import { UserDataComponent } from './Components/user-data/user-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    PostsContainerComponent,
    UserDataComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
