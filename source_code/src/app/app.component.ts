import {Component, OnInit} from '@angular/core';
import {GameApiService} from "./share/gameApi.service";


@Component({
  selector   : 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private data:GameApiService){};
  onDataLoad:boolean = false;
  ngOnInit(){
    this.data.transmitter.subscribe((data)=>{
      if (data.length>0){
        this.onDataLoad = true;
      }
      else {
        this.onDataLoad = false;
      }
    });
  }
}
