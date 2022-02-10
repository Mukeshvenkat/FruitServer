import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FruitsResolverService } from './fruit-resolver.service';
import { DataStorageService } from './data-storage.service';
import { FruitService } from './fruit.service';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    FruitsResolverService,
    DataStorageService,
    FruitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
