import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector   : 'trailer',
  templateUrl: 'trailer.component.html',
  styleUrls: ['trailer.component.css']
})

export class TrailerComponent implements OnInit{

  @Input() element:any;
  link:string;

  ngOnInit(){
    this.link=this.element.title.replace(/ /g,"+");
  }
}
