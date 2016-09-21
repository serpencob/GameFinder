import {Component, OnInit, Input} from '@angular/core';
import {SoundApiService} from "../../share/soundApi.service";

@Component({
  selector   : 'sound',
  templateUrl: 'sound.component.html',
  styleUrls: ['sound.component.css']
})

export class SoundComponent implements OnInit{

  @Input() element: any;
  constructor(private soundService: SoundApiService){}
  tracks:any[];

  ngOnInit(){
    this.tracks = [];
    this.soundService.getTraks(this.element.title)
      .subscribe((track)=>{
        let sounds: any = track.results;
        console.log(track.results);
        for (let i in sounds.trackmatches.track) {
          this.tracks.push(sounds.trackmatches.track[i]);
        }
        console.log(this.tracks);
      });
  }
}
