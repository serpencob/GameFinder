import {Component, OnInit} from '@angular/core';
import {GameApiService} from "../share/gameApi.service";
import {Description} from "../share/description";

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  descriptionData:Description[] = [];

  constructor(private DescriptionService: GameApiService) {
  }

  ngOnInit() {
    this.descriptionData = this.DescriptionService.lazyLoad();
    this.DescriptionService.transmitter
      .subscribe((description)=>{
        this.descriptionData = description;
        console.log(this.descriptionData);
      });
  }
}
