import {Http, Headers} from "@angular/http";
import {Injectable, EventEmitter} from '@angular/core';
import 'rxjs/Rx';
import {Description} from "./description";
import {Router} from "@angular/router";

@Injectable()


export class GameApiService{
  constructor(private http:Http, private route:Router){}

  transmitter:EventEmitter<any> = new EventEmitter();
  descriptionData:Description[] = [];
  gameExtractor(id:number){
    return this.descriptionData[id];
  }

  lazyLoad(){
    return this.descriptionData;
  }
  getDescription(name:string){
    const headers= new Headers({
      "X-Mashape-Key":"OZ5kJUof2EmshA2fVmGVOQ2ZAGhsp1CF1uPjsnQmbGlRxELwgR",
      "Accept":"application/json"
    });
    this.http.get("https://videogamesrating.p.mashape.com/get.php?count=50&game="+name,{headers:headers})
      .map((description)=>description=description.json())
      .subscribe((description)=> {
        this.descriptionData=description;
        this.transmitter.emit(this.descriptionData);
        this.route.navigate(['/']);
      })
  }

}
