import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HikingDiaryComponent } from './hiking-diary/hiking-diary.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HikingDetailComponent } from './hiking-diary/hiking-detail/hiking-detail.component';
import { HikingListComponent } from './hiking-diary/hiking-list/hiking-list.component';
import { HikingEditComponent } from './hiking-diary/hiking-edit/hiking-edit.component';
import { HikingItemComponent } from './hiking-diary/hiking-item/hiking-item.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    HikingDiaryComponent,
    HikingDetailComponent,
    HikingListComponent,
    HikingEditComponent,
    HikingItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
