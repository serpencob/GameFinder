import {Http, Headers} from "@angular/http";
import {Injectable, EventEmitter} from '@angular/core';
import 'rxjs/Rx';

@Injectable()


export class SoundApiService{
  constructor(private http:Http){

  }

  getTraks(gameTitle){
    return this.http.get('http://ws.audioscrobbler.com/2.0/?method=track.search&track='+gameTitle+' OST&api_key=8d481b08de6604866319ed6f8588ab32&limit=5&format=json')
      .map((data) => data=data.json());
  }
}
