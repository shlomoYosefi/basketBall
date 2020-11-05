import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/servies/get-data.service';

@Component({
  selector: 'app-show-players',
  templateUrl: './show-players.component.html',
  styleUrls: ['./show-players.component.css']
})
export class ShowPlayersComponent implements OnInit {

  arr

  constructor(private srv:GetDataService) { }

  ngOnInit(): void {
    this.srv.plaersAGrup.subscribe(val=>{this.arr = val})
  }

  delete(id){
    console.log(id);
    
    console.log(this.arr);
    
    for(let i=0; i<this.arr.length;i++){
      if(this.arr[i].id == id){
        return (confirm("Are you sure?"))? this.arr.splice(i,1):undefined    
      }
    }    
  }
}
