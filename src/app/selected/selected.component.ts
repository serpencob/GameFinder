import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameApiService} from "../share/gameApi.service";
import {Description} from "../share/description";

@Component({
  selector   : 'selected',
  templateUrl: 'selected.component.html',
  styleUrls: ['selected.component.css']
})

export class SelectedComponent implements OnInit{
  hide:boolean=false;
  index:number;
  element:Description;
  constructor(private actRoute:ActivatedRoute, private gameApi:GameApiService , private router: Router){
    this.actRoute.params.subscribe((index)=>{
      this.index=+index['id'];
      console.log(this.index);
      this.element = this.gameApi.gameExtractor(this.index);
    });
  }

  ngOnInit(){
    this.hide=false;

    if (this.element) {
      this.hide=true;
    } else {
      this.router.navigate(['/'])
    }
  }
}
