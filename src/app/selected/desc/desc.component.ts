import {Component, Input, OnInit} from '@angular/core';
import {Description} from "../../share/description";
import {Router} from "@angular/router";

@Component({
  selector   : 'desc',
  templateUrl: 'desc.component.html',
  styleUrls: ['desc.component.css']
})

export class DescComponent implements OnInit {
  platforms = [];
  ratecolor:string = 'white';
  @Input() element:any;

  constructor(private router:Router){}

  ngOnInit(){
      for (let i in this.element.platforms) {
        this.platforms.push(this.element.platforms[i]);
      }
      if(+this.element.score<5){
        this.ratecolor = 'red';
      }
      else if(+this.element.score>8){
        this.ratecolor = 'green';
      }
      else {
        this.ratecolor = 'yellow';
      }
  }
}
