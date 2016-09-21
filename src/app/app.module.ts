import {NgModule} from '@angular/core'
import {FormsModule , ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {AppComponent} from "./app.component";
import {TrailerComponent} from "./selected/trailer/trailer.component";
import {SoundComponent} from "./selected/sound/sound.component";
import {SearchComponent} from "./search/search.component";
import {DescComponent} from "./selected/desc/desc.component";
import {GameApiService} from "./share/gameApi.service";
import {ListComponent} from "./list/list.component";
import {routing} from "./app.route";
import {SelectedComponent} from "./selected/selected.component";
import {SoundApiService} from "./share/soundApi.service";
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  declarations: [AppComponent,
                 TrailerComponent,
                 SoundComponent,
                 SearchComponent,
                 DescComponent,
                 ListComponent,
                 SelectedComponent],
  imports     : [ReactiveFormsModule ,BrowserModule, FormsModule, HttpModule, routing, Ng2BootstrapModule],
  providers   : [ {provide: LocationStrategy, useClass: HashLocationStrategy}, GameApiService, SoundApiService],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
