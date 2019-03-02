import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule} from '@angular/material/button'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsMainComponent } from './tabs-main/tabs-main.component';
import { TabContentComponent } from './tab-content/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsMainComponent,
    TabContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
