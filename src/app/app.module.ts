import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BoardComponent} from './board.component';
import {CellComponent} from './cell.component';

@NgModule({
  declarations: [
    AppComponent,HelloComponent, BoardComponent, CellComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';


// import { AppComponent } from './app.component';


// @NgModule({
//   imports:      [ BrowserModule,  ],
//   declarations: [ AppComponent,  ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }

