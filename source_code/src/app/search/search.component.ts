import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {GameApiService} from "../share/gameApi.service";
import {Router} from "@angular/router";

@Component({
  selector   : 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  gameForm:FormGroup;
  loading:boolean = false;
  constructor(private DescriptionService:GameApiService){}
  ngOnInit(){

    this.gameForm=new FormGroup({
      'receive':new FormControl('', Validators.required)
    });
  }
  onSubmit(){
    this.loading = true;
    this.DescriptionService.getDescription(this.gameForm.controls['receive'].value);
    this.DescriptionService.transmitter.subscribe((data)=>this.loading = false);
    this.gameForm.reset();
  }
}
