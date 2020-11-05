import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/servies/get-data.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  nameGrup =''
  constructor(private srv:GetDataService) { }

  ngOnInit(): void {
    this.srv.nameAGrup.subscribe(val => this.nameGrup = val)
  }

 

}

export class Player{
  id:number
  name:string
  height:string
  PlayerPosition:string
  img:string
}
